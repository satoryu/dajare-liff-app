<template>
  <div v-if="profile">
    Hello, {{ profile.displayName }}
  </div>
</template>

<script>
import liff from '@line/liff';

export default {
  data() {
    return {
      profile: null
    };
  },
  created() {
    liff.getProfile().then((profile) => {
      this.profile = profile
    })
  }
}
</script>