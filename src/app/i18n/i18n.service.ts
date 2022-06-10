import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Logger } from '@shared';
import enUS from '../../translations/en-US.json';
import frFR from '../../translations/fr-FR.json';
import viVN from '../../translations/vi-VN.json';

const log = new Logger('I18nService');
const languageKey = 'language';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('vi-VN', viVN);
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('fr-FR', frFR);
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  set language(language: string) {
    let newLanguage = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang() || '';
    let isSupportedLanguage = this.supportedLanguages.includes(newLanguage);

    if (newLanguage && !isSupportedLanguage) {
      newLanguage = newLanguage.split('-')[0];
      newLanguage =
        this.supportedLanguages.find((supportedLanguage) => supportedLanguage.startsWith(newLanguage)) || '';
      isSupportedLanguage = Boolean(newLanguage);
    }

    // Fallback if language is not supported
    if (!newLanguage || !isSupportedLanguage) {
      newLanguage = this.defaultLanguage;
    }

    language = newLanguage;

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
  }

  get language(): string {
    return this.translateService.currentLang;
  }
}
