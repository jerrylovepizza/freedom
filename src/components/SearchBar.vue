<template>
  <div class="searbar-section">

    <v-container fluid grid-list-lg>      
              <v-layout row>
                  <v-flex xs6 class="middle-text">
                    <b class="color-type1">欢迎使用自由浏览</b>
                  </v-flex>
                  <v-flex xs6>
                    <div class="text-right dropdown-site">
                        <v-menu                      
                        :close-on-content-click="true"
                        :nudge-width="200"
                        offset-x
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn                            
                            class="v-round-drop-btn"
                            v-bind="attrs"
                            v-on="on"
                            normal
                            rounded
                            >
                            {{radios}} <span class="drop-trangle"></span>
                            </v-btn>
                        </template>

                        <v-card>
                            <div class="px-3 pt-1 card-radio-wrapper">
                               <v-radio-group v-model="radios">
                                   <v-radio value="Duckduckgo" class="mx-0 pb-2">
                                        <template v-slot:label>
                                        <div class="flex-radio-label"> <img
                                        :src="duckduckgo"
                                        alt="Duckduckgo" />Duckduckgo</div>
                                        </template>
                                    </v-radio>
                                    
                                    <v-radio value="Google" class="mx-0 pb-2">
                                        <template v-slot:label>
                                        <div class="flex-radio-label"><img
                                        :src="google"
                                        alt="google" />Google</div>
                                        </template>
                                    </v-radio>

                                    <v-radio value="wiki" class="mx-0 pb-2">
                                        <template v-slot:label>
                                        <div class="flex-radio-label"><img
                                        :src="wiki"
                                        alt="wiki">维基百科</div>
                                        </template>
                                    </v-radio>

                                    <v-radio value="youtube" class="mx-0 pb-2">
                                        <template v-slot:label>
                                        <div class="flex-radio-label"><img
                                        :src="youtube"
                                        alt="youtube">Youtube</div>
                                        </template>
                                    </v-radio>
                                </v-radio-group>
                            </div>
                        </v-card>
                        </v-menu>
                    </div>
                    
                  </v-flex>
              </v-layout>

              <div>
                <v-text-field
                    v-model="message"
                    solo         
                    single-line
                    filled
                    flat
                    rounded
                    hide-details      
                    append-icon="mdi-magnify"                    
                    background-color="#fff"
                    v-on:keyup.enter="availableSearch"
                >
          
          </v-text-field>
              </div>
          
        
    </v-container>

  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import duckduckgo from "../assets/duckduckgo.png";
    import google from "../assets/google.svg";
    import wiki from "../assets/wiki.png";
    import youtube from "../assets/youtube.svg";
    import store from '../store';
    import { Getter } from 'vuex-class';

  @Component
  export default class SearchBar extends Vue {       
       
    radios: string = "Duckduckgo";
    message: string = "";
    duckduckgo: any = duckduckgo;
    google: any = google;
    wiki: any = wiki;
    youtube: any = youtube;
    
    availableSearch(e: any): void {
        store.dispatch('topToolbar/changeSearch', this.message);
    }

  }
</script>

<style lang="scss">
    .searbar-section {
        background-color: #fd2d57;

        .v-text-field--rounded {
            border-radius: 10px;
        }
    }

    .v-menu__content {
        margin-top: 60px;        
    }

    .v-input--selection-controls.v-input.v-input--radio-group {
        > .v-input__control {
            width: 100%;
        }
    }
     .v-radio {
        justify-content: space-between;
        border-bottom: 1px solid #f3f5f7;

        &:last-child {
            border-bottom: 0;
        }

        > div {
            order: 1;
        }
    }

    .color-type1 {
        color: #fff;        
    }

    .flex-radio-label {
        display: flex;
        align-items: center;

        img {
            width: 30px;
            margin-right: 15px;
        }
    }

    .v-round-drop-btn {    

        &.v-btn:not(.v-btn--round).v-size--default {
            padding: 0 24px;
            min-width: 120px;
            position: relative;

            .drop-trangle{
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                right: -12px;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #fff transparent transparent transparent;
            }
        }    
        

        &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: none;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        &.v-btn.theme--light {
            color: #fff;
        }

        &:after {
            content: "";
            display: block;
            
        } 
    }
    
    .middle-text {
        display: flex;
        align-items: center;
    }
    
    .card-radio-wrapper {
        .v-label {
            width: calc(100% - 80px);
            flex: 1 0 calc(100% - 80px);
        }
    }
</style>