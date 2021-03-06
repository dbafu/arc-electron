const fs = require('fs-extra');
const path = require('path');
const log = require('../logger');
/**
 * A class that is responsible for setting up theme defaults.
 */
class ThemeDefaults {
  /**
   * Sets defaults if the defaults are not yet set.
   * It copues anypoint and default theme to theme location
   * and creates theme-info file.
   *
   * @return {Promise} Resolved promise when the defaults are stored.
   */
  prepareEnvironment() {
    log.debug('Preparing ARC environment.');
    const names = this._readDefaultThemesPackages();
    return this._ensureThemes(names)
    .then(() => this._setThemeInfo());
  }

  _readDefaultThemesPackages() {
    const source = path.join(__dirname, '..', '..', '..', 'appresources', 'themes');
    log.silly('Searching for default themes...');
    const themes = this._listThemePackages(source);
    log.silly(`Found ${themes.length} default themes.`);
    return themes;
  }

  _listThemePackages(themePath, parent) {
    let items;
    try {
      items = fs.readdirSync(themePath);
    } catch (e) {
      log.warn(`Unable to read themes path ${themePath}.`);
      return;
    }
    let themePaths = [];
    items.forEach((name) => {
      const loc = path.join(themePath, name);
      const stats = fs.statSync(loc);
      if (stats.isDirectory()) {
        const pkgFile = path.join(loc, 'package.json');
        if (fs.pathExistsSync(pkgFile)) {
          if (parent) {
            name = path.join(parent, name);
          }
          log.silly('Found default theme: ' + name);
          themePaths[themePaths.length] = {
            name,
            location: loc
          };
        } else {
          log.silly(`Searching subdirectories of ${loc} for themes`);
          if (parent) {
            parent = path.join(parent, name);
          } else {
            parent = name;
          }
          const deepThemes = this._listThemePackages(loc, parent);
          if (deepThemes) {
            themePaths = themePaths.concat(deepThemes);
          }
        }
      }
    });
    return themePaths;
  }

  _ensureThemes(themes) {
    const item = themes.shift();
    if (!item) {
      return Promise.resolve();
    }
    return this._ensureTheme(item)
    .then(() => this._ensureThemes(themes))
    .catch(() => this._ensureThemes(themes));
  }

  _ensureTheme(info) {
    const file = path.join(process.env.ARC_THEMES, info.name);
    return fs.pathExists(file)
    .then((exists) => {
      if (exists) {
        log.silly(`Theme ${file} exists. Skipping initialization.`);
        return;
      }
      log.silly(`Theme ${file} do not exists. Initializing.`);
      return this._copyThemeFiles(info);
    });
  }

  _copyThemeFiles(info) {
    const dest = path.join(process.env.ARC_THEMES, info.name);
    return fs.ensureDir(dest)
    .then(() => fs.copy(info.location, dest))
    .catch((cause) => {
      log.error('Unable to copy default theme from ' + info.location + ' to ' + dest);
      log.error(cause);
    });
  }
  // Setups theme info file if missing
  _setThemeInfo() {
    const file = path.join(process.env.ARC_THEMES, 'themes-info.json');
    return fs.pathExists(file)
    .then((exists) => {
      if (exists) {
        log.debug(`theme-info.json exists. Skipping initialization.`);
        return this._ensureThemesInfoVersion(file);
      }
      log.info('Creating themes-info.json file');
      return this._copyInfoFile();
    });
  }

  _ensureThemesInfoVersion(file) {
    return fs.readJson(file, {throws: false})
    .then((data) => {
      if (!data || !data.length) {
        return this._copyInfoFile();
      }
      const item = data[0];
      if (!item.location) {
        return this._copyInfoFile();
      }
    });
  }

  _copyInfoFile() {
    const source =
      path.join(__dirname, '..', '..', '..', 'appresources', 'themes', 'themes-info.json');
    const dest = process.env.ARC_THEMES_SETTINGS;
    return fs.readJson(source, {throws: false})
    .then((info) => {
      info = info || [];
      return info;
    })
    .then((info) => fs.writeJson(dest, info));
  }
}
exports.ThemeDefaults = ThemeDefaults;
