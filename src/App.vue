<template>
  <div id="wrapper">
    <div id="logoTitleWrapper">
      <img id="logo" src="./assets/img/logo.svg" alt="Wingspan Helper logo" />
      <span id="titleWrapper">
        <div id="title">Wingspan Helper</div>
        <div id="subtitle">Swift Edition</div>
      </span>
    </div>
    <div id="app">
      <main id="main">
        <router-view />
      </main>
      <footer id="footer">
        Contribute on
        <a href="https://github.com/verdantPermission/wingspan-helper">GitHub</a> •
        <em>Cardenio Modern</em> typeface by
        <a href="http://nilscordes.com/">Nils Cordes</a>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";

#wrapper {
  max-width: $app-width;
  margin: 0 auto;
  padding: $app-padding;
  text-align: center;

  @include break-phone {
    margin: auto;
  }
}

#logoTitleWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#logo {
  height: 5rem;
  margin: 0.5rem 0 1rem;

  @include break-phone {
    height: 7rem;
    margin: 0.5rem 0;
  }
}

#titleWrapper {
  position: relative;
  top: 4rem;
  left: -2.5rem;
  font-family: $font-primary;
  font-weight: 550;
  line-height: .8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;
}

#title {
  font-size: 3rem;
}

#subtitle {
  font-size: 1.3rem;
}

#app {
  background-color: $color-fg--dark;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 47px 0px rgb(66, 61, 55);
  border: 5px solid $color-fg--dark;
  border-radius: $border-radius-default;
}

#main {
  position: relative;
  padding: 1rem 0.5rem;
  flex: 1;
  background-color: $color-fg;
  border-radius: $border-radius-default;
  background-clip: border-box;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);

  @include break-phone {
    padding: 1rem;
  }
}

#footer {
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
  width: 100%;
  padding: 1rem;
}
</style>
