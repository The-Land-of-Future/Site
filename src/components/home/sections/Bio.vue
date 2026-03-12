<script>
export default {
  name: "Bio"
}
</script>

<template>
  <section class="bio">
    <div class="content">
      <div id="info">
        <div id="text">
          <h2>About The Land of Future</h2>
          <p>The Land of Future is more than a name — it’s a movement. 🌌</p>
          <p>Born in VRChat, rooted in <a href="https://vrchat.com/home/world/wrld_b2d9f284-3a77-4a8a-a58e-f8427f87ba79/info">Club Orion</a> 🪐 and expanding into our brand-new venue <a href="https://vrchat.com/home/world/wrld_d3c63056-8295-432a-bb9d-a0f6319444b6/info">Neoluma</a> ✨, The Land of Future unites open-minded party people in a fully immersive club experience beyond reality.</p>
          <br>
          <p>Driven by futuristic energy and high-intensity soundscapes 🔊, DJ The Land of Future delivers a wide spectrum of electronic music — from Trance, House, Psytrance, Big Room and Techno to Drum & Bass and Harder Styles, ranging from 120 to 200 BPM ⚡</p>
          <p>On selected nights, guest DJs from the community 🎧 join the lineup, bringing their own styles within these genres — not at every party, but on special occasions.</p>
          <br>
          <p>Every event is designed to build energy, break limits, and keep the dancefloor moving 💃🕺</p>
          <br>
          <p>This is a place where music, light, and community merge 🌐</p>
          <p>No judgment. No boundaries. Just rhythm, connection, and pure motion.</p>
          <br>
          <p>Welcome to The Land of Future 🚀</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
strong {
  font-weight: bold;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#text {
  margin: 40px 0;
}

#text:deep(a[href]) {
  color: var(--color-primary);
}
#text:deep(a[href]:hover) {
  color: var(--color-primary-dark);
}

.content {
  max-width: 80rem;
  margin: 0 auto;
}

p:not(:last-child) {
  margin-bottom: 20px;
}
</style>
