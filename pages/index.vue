<template>
  <div style="width: 100vw">
    <div style="width: 100vw" id="phaser" />
  </div>
</template>

<script>
export default {
  mounted() {
    new Phaser.Game({
      parent: "phaser",
      type: Phaser.AUTO,
      scale: [
        {
          width: window.innerWidth,
          height: window.innerHeight,
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
      ],
      parent: "phaser",
      scene: [this.$scene.preloader],
      backgroundColor: "#023",
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
          gravity: { y: 500 },
        },
      },
      render: {
        pixelArt: true,
      },
    });
  },
};
</script>
