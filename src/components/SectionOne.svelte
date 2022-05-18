<script>
    import { createEventDispatcher } from "svelte";
    

    const dispatch = createEventDispatcher();

    function btn(){
        dispatch('toggleGallery', true )
    }

</script>
<article>
    <div class="art">
        <div class="maintxt">
            <h1>
                <span>FAITH</span><span>LAKA.LAKA</span><span><strong>- 🖤 - </strong></span><span> PETER</span><span>butao </span>
            </h1>
            <p> love happened, <strong>SYML</strong></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus!</p>
            <div class="line"></div>

        </div>
    </div>
    <div class="art-sub">
        <div class="arts">
            <div class="btn">
                <button on:click={btn}>EXPLORE GALLERY</button>
            </div>
        </div>
    </div>
</article>
<style lang="scss">
    @import '../_config.scss';

    article{
        height: 100vh;
        background: var(--bc);
        .art{
            background-image: url('/assets/photo/photo1.jpg');
            @include back(center, cover);
            background-color: rgba(0, 0, 0, 0.637);
            max-width: var(--mxw);
            margin: auto;
            border-bottom-left-radius: 1px;
        
            
            .maintxt{   
                padding: 5px;
                padding-top: 15vh;
                text-align: center;
                h1{
                    @include font(transparent, 48px, 900);
                    text-transform: uppercase;
                    letter-spacing: 1.3px;
                    text-rendering: optimizelegibility;
                    background: var(--gbc);
                    -webkit-background-clip: text;
                    background-clip: text;
                    letter-spacing: 9px;
                    span{
                        justify-content: center;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    span:nth-child(3){
                        background: var(--rpc);
                        font-size: 1.8rem;
                        -webkit-background-clip: text;
                        background-clip: text;                        

                    }
                }
                p{
                    @include font(var(--w_), 0.95rem, 500);                    
                    letter-spacing: 1.6px;
                    strong{
                        @include font(var(--rc), 1.2rem, 900);
                        letter-spacing: 2.7px;
                    }
                }
                .line{
                    opacity: 100%;
                }
            }
            
        }
        .art-sub{
            .arts{
                .btn{
                    padding: 20px 10px ;
                    text-align: center;
                    button{
                        border: none;
                        background: none;
                        background: var(--gbc);
                        padding: 15px;
                        @include font(var(--wc), 1rem, 750);
                        box-shadow: rgba(0, 0, 0, 0.466) 0 16px 40px 0;
                        width: 100%;
                    }

                }

            }
        }
    }
    @keyframes bg-anime{
        0%{
            background-color: rgba(0, 0, 0, 0.437);
        }
        50%{
            background-color: rgba(0, 0, 0, 0.837);
        }
        100%{
            background-color: rgba(0, 0, 0, 0.937);
        }
    }
</style>