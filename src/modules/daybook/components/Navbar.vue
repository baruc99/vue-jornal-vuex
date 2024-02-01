<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white" href="">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        height="24"
        class="d-inline-block aling-text-top mx-2"
      />

      Daybook
    </a>
    <div class="d-flex">
      <button class="btn btn-outline-info mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  // Resto del código del componente
};
</script>