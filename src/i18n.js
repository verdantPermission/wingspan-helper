import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    playerTitle: 'Players',
    resetPlayerTitleA11y: 'reset player names',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards', 'Nectar']
  },
  de: {
    playerTitle: 'Spieler',
    resetPlayerTitleA11y: 'Spielernamen zurücksetzen',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln', 'Nektar']
  }
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
