<script>
    export let data
    import {createEventDispatcher} from 'svelte';
    const dispatch =  createEventDispatcher()

    function back(){
        dispatch('toggleBack', true)
    }
</script>
<article>
    <div class="art">
        <header>
            <div class="head">
                <div class="back">
                    <span on:click={back}>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" data-v-0067efe0=""><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill="#fff" data-v-0067efe0="">

                        </path>
                        </svg>
                    </span>
                </div>
            </div>
        </header>
        <main>
            <div class="mn">
                <div class="card-container">
                    {#each $data.video as x  }

                    <div class="card">
                        <div class="cd">
                            <div class="image">
                                <!-- svelte-ignore a11y-media-has-caption -->
                                <video width="320" height="240" controls>
                                    <source src="{x.image}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div class="content">
                                <div class="cnt">
                                    <div class="cons">
                                        <!-- icon area -->
                                        {x.date}
                                    </div>
                                    <div class="img-desc">
                                        <p>{x.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </main>

        
    </div>
</article>

<style lang="scss">
    @import '../_config.scss';

    article{
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100%;
        background: var(--wc);
        z-index: 15;
        
        .art{
            max-width: var(--mxw);
            margin: auto;
            position: relative;
            header{
                background: var(--gbc);
                position: fixed;
                top: 0;
                left: 0;
                .head{
                    padding: 15px;
                    span{
                        background: var(--gbc);
                        box-shadow: black 0 16px 40px 0;
                        padding: 14px ;
                        svg{
                            transform: rotate(180deg);
                        }
                    }
                }
            }
              
            main{
                .mn{
                    .card-container{

                        .card{
                            .cd{
                                padding: 10px;
                                .image{
                                    // background: var(--dp);
                                    
                                    // img{
                                    //     width: 100%;
                                    //     height: 450px;
                                    
                                    // }
                                    .img{
                                        width: 100%;
                                        height: 450px;
                                        @include back(center, contain);
                                        background-color: rgba(0, 0, 0, 0.733);
                                        
                                        
                                    }
                                 
                                }
                             
                            }
                        }
                    }
                }
            }
        }
    }
</style>