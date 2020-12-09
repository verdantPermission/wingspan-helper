<template>
  <div class="home">
    <ScoringTable />
    <div class="action-bar">
      <PlayerCountChooser class="action player-count"/>
      <LanguageToggle />
      <button class="action reset" @click="reset()">{{ $t('resetPoints') }}</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScoringTable from '@/components/ScoringTable.vue'
import PlayerCountChooser from '@/components/PlayerCountChooser.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'

export default {
  name: 'home',
  components: {
    ScoringTable,
    PlayerCountChooser,
    LanguageToggle
  },
  methods: {
    reset () {
      this.$store.commit('resetAllScores')
    }
  }

}
</script>
<style lang="scss">
  .action-bar {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
  }

  .action + .action {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }

  .action.player-count {
    border-radius: $border-radius-default;

    button {
      border-radius: 0;
      background-color: $color-fg--light;
      color: $color-text;
      padding: 0.25rem 0.5rem;

      &:hover, &:focus {
        box-shadow: inset 0 0 0 2px $color-primary;
      }

      &.active {
        background-color: $color-primary;
        color: $color-fg;
      }

      &:first-child {
        border-top-left-radius: $border-radius-default;
        border-bottom-left-radius: $border-radius-default;
      }
    }

    span {
      border-top-right-radius: $border-radius-default;
      border-bottom-right-radius: $border-radius-default;
      // box-shadow: inset 0 0 0 2px $color-primary;
      background-color: $color-fg--light;
      color: $color-text;
      border: 0 solid $color-primary;
      padding: 0.25rem 1rem;
      font-family: $font-primary;
      font-weight: bold;
      letter-spacing: 0.01em;
      display: inline-block;
    }
  }

</style>
