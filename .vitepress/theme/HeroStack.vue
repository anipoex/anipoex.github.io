<template>
  <div class="hero-stack">
    <img class="desktop" src="/screens/desktop-list.jpg" alt="Anipoex manga list on desktop" />
    <img class="ios" src="/screens/list.jpg" alt="Anipoex manga list on iPhone" />
    <img class="android" src="/screens/android-list.jpg" alt="Anipoex manga list on Android" />
  </div>
</template>

<style scoped>
.hero-stack {
  position: relative;
  width: min(100%, 520px);
  aspect-ratio: 520 / 360;
  margin: 0 auto;
}

.hero-stack img {
  position: absolute;
  top: 50%;
  box-shadow: var(--vp-shadow-5);
}

.desktop {
  left: 0;
  transform: translateY(-50%);
  width: 85%;
  border-radius: 12px;
}

.ios {
  right: 30%;
  z-index: 1;
  width: 29%;
  border-radius: 20px;
  transform: translateY(-50%) rotate(-2deg);
}

.android {
  right: 2%;
  z-index: 2;
  width: 29%;
  border-radius: 20px;
  transform: translateY(-50%) rotate(4deg);
}
</style>
