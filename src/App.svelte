<script>
	import Sectionone from "../src/components/SectionOne.svelte";	
	import SectionTwo from '../src/components/SectionTwo.svelte';
	
	let dark;

	$: toggle = false;
	$: gallery = false;

	let KEY = "FWS-1.0.0"
	
	
	
	$: localStorage.setItem(KEY, dark)

	$: if(localStorage.getItem(KEY) !== null){
		dark = new Boolean(localStorage.getItem(KEY))
	}

	function toggleGalleryFunction(e){
		gallery = !gallery		
	}
	function toggleBackFunction(e){
		gallery = false;
	}


	


</script>

<div id="layout">
	<div class="lay">
		<nav class="navone">
			<div class="nv">

				<div class="logo">
					<h1>
						<span>F</span>
						<span>🖤</span>
						<span>ITH</span>
					</h1>
				</div>
				<div class="list">
					
					<ul >
						<li on:click={()=>{dark = !dark}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="feather feather-moon">
							<path fill="blue" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
						</svg>
						</li>
					</ul>

				</div>
			</div>
		</nav>
		<main>
			<div class="sectionone">
				<Sectionone on:toggleGallery={toggleGalleryFunction} />
			</div>
			{#if gallery === true}
			<div class="sectiontwo">				
				<SectionTwo on:toggleBack={toggleBackFunction} />
			</div>
			{/if}
			
			
		</main>
		<nav class="navtwo">
			<div class="nv">
				<div class:clip={toggle}  class="list">
					<h1>LAKALAKA © 2022 | 😅</h1>
					<div class="tabs">
						<ul>
							<li><a href="/about">ABOUT</a></li>
							<li></li>
						</ul>
					</div>
					
				</div>
				
				<button on:click={()=>{toggle = !toggle}} class="toggle">
					<div></div>
					<div></div>
				</button>
			</div>
		</nav>
	</div>
</div>

<svelte:head>
	{#if dark === true}
	<style>
		:root{
			--lc: hsl(0, 20%, 5%);
			--tc: hsl(0, 0%, 96%);
			--nv: transparent;
			--wc: hsl(15, 100%, 5%);
			--bc: -webkit-linear-gradient(315deg, hsl(153, 62%, 20%) 25%, hsl(230, 100%, 5%));
		}
		main article .art{
			background-image: none !important;
			background-color: transparent !important;
		}
	</style>
	{/if}
</svelte:head>

<style lang="scss">
	@import './_config.scss';

	:root{
		--tc: #000000;
		--nv:  -webkit-linear-gradient(315deg, rgba(255, 255, 255, 0) 15%, hsla(0, 0%, 0%, 0.789));
		--wc: whitesmoke;
		--w_: seashell;
		--rc: hsl(0, 62%, 45%);
		--pc: #42b883;
		--dp: hsl(153, 47%, 40%);
		//gradient
		--gbc: -webkit-linear-gradient(315deg, hsl(153, 62%, 54%) 25%, hsl(230, 100%, 70%));
		--bc: -webkit-linear-gradient(315deg, hsl(153, 62%, 54%) 25%, hsl(230, 100%, 70%));
		--rpc: -webkit-linear-gradient(315deg, rgb(211, 66, 66) 25%, rgb(237, 100, 255));

		//width
		--mxw: 900px;
	}
	
	:global(body){
		padding:0;
		margin: 0;
		box-sizing: border-box;
		background: var(--lc);
	}
	h1{
		margin: 0;
		padding: 0;
	}
	.clip{
		pointer-events: all !important;
		clip-path: circle(1500px at 10%) !important;
		
	}
	.display{
		display: flex;

	}

	#layout{
		.lay{
			//navigation one
			.navone{
				position: fixed;
				top:0;
				width: 100%;
				margin: auto;
				background: var(--nv);
				

				.nv{
					margin: auto;
					padding: 0 10px;
					max-width: var(--mxw);
					display: flex;
					align-items: center;
					justify-content: space-between;
					.logo{
						h1{
							@include font(transparent, 1.1rem,900);
							letter-spacing: 1.5px;
							background: var(--rpc);
							-webkit-background-clip: text;
							background-clip: text;
							

							span:nth-child(2){
								letter-spacing: 0;
							}
							
						}
						
					}
					.list{
						ul{
							padding: 0;
							list-style: none;
							li{
								margin-left: 10px;
								padding: 8px;
								a{
									text-decoration: none;
									@include font(var(--pc), 1rem, 450);
								}
							}
							li:nth-child(1){
								background: rgba(255, 255, 255, 0.159);
								filter: grayscale(70);
								border-radius: 2px;
								svg{
									padding: 4px 8px;
								}
							}
						}
					}
				}
			}
			//main content
			main{
				max-width: var(--mxw);
				margin: 0 auto;
				
				
			}
			//navigation two
			.navtwo{
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;
				.nv{
					padding: 5px;
					.list{
						background-color: var(--wc);
						position: fixed;
						top:0;
						left:0;
						width:100%;
						height: 100vh;
						display: flex;
						flex-direction: column;
						clip-path: circle(0px at 10%);
						pointer-events: none;
						h1{
							text-align: end;
							@include font(var(--tc), 1rem, 500);
							padding: 10px;
						}
						.tabs{
							flex: 1;
							display: flex;
							align-items: center;
							justify-content: center;
							padding: 10px;
						}
					}
					ul{
						padding:0;
						margin:0;
						list-style: none;
						width: 100%;
					}
					.toggle{
						position: relative;
						z-index: 10;
						padding: 10px;
						background:none;
						border: none;
						margin:0;
						border: var(--gbc) solid 1px;
						background-color: rgba(0, 0, 0, 0.508);
						div{
							width: 30px;
							height: 3.5px;
							background: var(--gbc);
						}
						div:nth-child(2){
							margin:10px 0;
							width: 20px;
						}
					}

				}
			}
		}
	}

	h1 {
		color: green;
		text-transform: uppercase;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>