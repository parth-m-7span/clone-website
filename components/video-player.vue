<template>
  <div class="relative flex items-center justify-center">
    <video
      ref="videoElement"
      class="video-player"
      autoplay
      loop
      muted
      playsinline
      disablepictureinpicture
      :controls="!showOverlay"
      controlslist="nodownload noplaybackrate"
    >
      <source :src="value" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      v-if="showOverlay"
      class="absolute bg-black bg-opacity-50 flex justify-center items-center rounded-full"
    >
      <button
        aria-label="Play Video"
        class="text-white focus:outline-none"
        @click="playVideo"
      >
        <Icon name="ic:baseline-play-arrow" class="w-14 h-14 lg:w-28 lg:h-28" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      showOverlay: true,
    };
  },
  mounted () {
    this.$refs.videoElement.currentTime = 20;
    this.$refs.videoElement.volume = 0.05;
  },
  methods: {
    handleVideoClick () {
      if (this.showOverlay) {
        this.playVideo();
      } else {
        this.$refs.videoElement.paused
          ? this.$refs.videoElement.play()
          : this.$refs.videoElement.pause();
      }
    },
    playVideo () {
      this.$refs.videoElement.currentTime = 0;
      this.$refs.videoElement.play();
      this.$refs.videoElement.muted = false;
      this.showOverlay = false;
    },
  },
};
</script>

<style>
/* Since fullscreen functionality not working , hidden the button as of now */
.video-player::-webkit-media-controls-fullscreen-button {
  display: none;
}
</style>
