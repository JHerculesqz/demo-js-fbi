<template>
  <div class="promptGlobalContainer" v-dom-portal>
    <!--<div class="promptBoxes" >-->
      <MarvelPrompt class="customStyle" v-for="(prompt, index) in oPrompts"
                    :key="index"
                    :status="prompt.status"
                    :content="prompt.content"></MarvelPrompt>
    <!--</div>-->
  </div>
</template>

<script>
  import MarvelPrompt from '../prompt/MarvelPrompt.vue';

  export default {
    components: {
      MarvelPrompt
    },
    name: "MarvelPromptGlobal",
    props:["oPrompts"],
    data: function(){
      return {

      };
    },
    methods: {

    },
    computed: {

    },
    mounted: function(){

    }
  }

</script>

<style scoped>
  .promptGlobalContainer{
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
  .customStyle{
    margin-bottom: 10px;
  }
</style>
