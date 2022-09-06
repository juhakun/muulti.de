<template>
  <div id="nav">
    <p>
      <base-button
        v-if="buttonClick === false || selectedCategory === 'news'"
        mode="active"
        @click="$emit('filter-category', 'news');
          this.buttonClick = true;
          this.toggleDesign = !false;"
        ><a href="#">News</a></base-button
      >
      <base-button v-else @click="$emit('filter-category', 'news');
          this.buttonClick = true;
          this.toggleDesign = false;"
        ><a href="#">News</a></base-button
      ><br />
      <base-button
        v-if="selectedCategory === 'software'"
        mode="active"
        @click="
          $emit('filter-category', 'software');
          this.buttonClick = true;
          this.toggleDesign = false;
        "
        ><a href="#">Software</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'software');
          this.buttonClick = true;
          this.toggleDesign = false;
        "
        ><a href="#">Software</a></base-button
      >
      <br />

    <section>
      <base-button @click="toggleDesi = !toggleDesi; $emit('filter-category', 'graphics');" v-if="selectedCategory === 'exhibitions' || selectedCategory === 'graphics' ||selectedCategory === 'management' "
      style="font-weight: bold"
      
    >
      Design
    </base-button>
    <base-button v-else
      
      @click="toggleDesi = !toggleDesi; $emit('filter-category', 'graphics');"
    >
      Design
    </base-button>
    <section v-show="toggleDes" style="
        padding-left: 1.25rem;"> 

      <base-button
        v-if="selectedCategory === 'graphics'"
        mode="active"
        @click="
          $emit('filter-category', 'graphics');
          this.buttonClick = true;
        "
        ><a href="#">Graphics</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'graphics');
          this.buttonClick = true;
        "
        ><a href="#">Graphics</a></base-button
      ><br />
      <base-button
        v-if="selectedCategory === 'exhibitions'"
        mode="active"
        @click="
          $emit('filter-category', 'exhibitions');
          this.buttonClick = true;
        "
        ><a href="#">Exhibition</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'exhibitions');
          this.buttonClick = true;
        "
        ><a href="#">Exhibition</a></base-button
      ><br />

      <base-button
        v-if="selectedCategory === 'management'"
        mode="active"
        @click="
          $emit('filter-category', 'management');
          this.buttonClick = true;
        "
        ><a href="#">Management</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'management');
          this.buttonClick = true;
          
        "
        ><a href="#">Management</a></base-button
    
      ></section>
    </section>
      <base-button v-if="selectedCategory === 'about'" mode="active"
        ><a href="#">About</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('show-about', 'about');
          this.buttonClick = true;
          this.toggleDesign = false;
        "
        ><a href="#">About</a></base-button
      >
      <!-- <base-button @click="$emit('show-contact', 'contact')">Contact</base-button> -->
    </p>
  </div>
</template>

<script>
export default {
  props: ["selectedCategory"],

  data() {
    return {
      buttonClick: undefined,
      toggleDesi: false,
    };
  },
  methods: {},
  created() {
    this.$emit("filter-category", "news");
    this.buttonClick = false;
  },
};
</script>
