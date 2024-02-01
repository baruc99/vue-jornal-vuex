<template>
  <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params:{ id: 10}})"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">26</span>
      <span class="mx-1 fs-5">Enero</span>
      <span class="mx-2 fw-light">2024, viernes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum
      voluptas explicabo maiores rem quaerat reprehenderit voluptatem quasi quis
      laudantium qui culpa placeat tempore reiciendis eos veniam sequi, ad ipsa.
    </div>
  </div>
</template>


<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>