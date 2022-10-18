<template>
  <div id="nav">
    <p>
      <base-button v-if="buttonClick === false || selectedCategory === 'about'" 
      mode="active" 
      @click="$emit('show-about', 'me'); 
          this.buttonClick = true;
          this.toggleDesign = false;
          this.toggleSoftware = false;"
        ><a href="#">About</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('show-about', 'me');
          this.buttonClick = true;
          this.toggleDesign = false;
          this.toggleSoftware = false;"
        ><a href="#">About</a></base-button
      >
      
      <section>
      <base-button 
      v-if=" selectedCategory === 'fullstack' || selectedCategory === 'frontend' || selectedCategory === 'softwareSkills'"
        @click="this.toggleSoftware = true; 
        this.toggleDesign = false; 
        this.buttonClick = true; 
        $emit('show-about', 'softwareSkills');" 
        
      style="font-weight: bold">
      Software
    </base-button>
    <base-button v-else
      @click="this.toggleSoftware = true; 
      this.toggleDesign = false;
      this.buttonClick = true; 
      $emit('show-about', 'softwareSkills');"
    >
      Software
    </base-button>

    <section v-show="toggleSoftware" style="
        padding-left: 1.25rem;"> 
      <base-button
        v-if="selectedCategory === 'fullstack'"
        mode="active"
        @click="
          $emit('filter-category', 'fullstack');
          this.buttonClick = true;"
        ><a href="#">Fullstack</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'fullstack');
          this.buttonClick = true;
        "
        ><a href="#">Fullstack</a></base-button
      ><br />
      <base-button
        v-if="selectedCategory === 'frontend'"
        mode="active"
        @click="
          $emit('filter-category', 'frontend');
          this.buttonClick = true;
        "
        ><a href="#">Frontend</a></base-button
      >
      <base-button
        v-else
        @click="
          $emit('filter-category', 'frontend');
          this.buttonClick = true;"
        ><a href="#">Frontend</a></base-button
      ><br />
</section>
      </section>



    <section>
      <base-button 
      @click="this.toggleDesign = true; 
      this.toggleSoftware = false;
      this.buttonClick = true; 
      $emit('show-about', 'designSkills');" 
      v-if="selectedCategory === 'exhibitions' || selectedCategory === 'graphics' ||selectedCategory === 'management' ||selectedCategory === 'designSkills' "
      style="font-weight: bold"
      
    >
      Design
    </base-button>
    <base-button v-else
      @click="this.toggleDesign = true; 
      this.toggleSoftware = false;
      this.buttonClick = true; 
      $emit('show-about', 'designSkills');"
    >
      Design
    </base-button>
    <section v-show="toggleDesign" style="
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
    </p>

  </div>
</template>

<script>
export default {
  props: ["selectedCategory"],

  data() {
    return {
      buttonClick: undefined,
      toggleDesign: false,
      toggleSoftware: false,
    };
  },
  methods: {},
  created() {
    this.$emit('show-about', 'me');
    this.buttonClick = false;
  },
};
</script>
