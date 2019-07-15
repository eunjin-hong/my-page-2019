<template>
	<v-card>
		<v-responsive class="block introduction" :aspect-ratio="2.5/1">
			<h2 class="subtitle">{{ $t("home.album.title") }}</h2>
			<v-container grid-list-sm fluid>
				<v-layout row wrap>
					<v-flex v-for="n in 9" :key="n" xs4 d-flex>
						<v-card flat tile class="d-flex">
							<v-img
								:src="photoURLs[n-1]"
								:lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
								aspect-ratio="1"
								class="grey lighten-2"
							>
								<template v-slot:placeholder>
									<v-layout fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
									</v-layout>
								</template>
							</v-img>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-responsive>
	</v-card>
</template>

<script>
	import { async } from "q";
	import axios from "axios";

	export default {
		data() {
			return {
				photoURLs: [
					"https://scontent.cdninstagram.com/vp/e3ea8c7a37d578e1d51a41c65c230d32/5DEE3814/t51.2885-15/sh0.08/e35/s640x640/65489207_115536949728265_5363995897758694518_n.jpg?_nc_ht=scontent.cdninstagram.com"
				]
			};
		},
		mounted() {
			const URL = `https://api.instagram.com/v1/users/self/media/recent/?client_id=${process.env.VUE_APP_INSTAGRAM_CLIENT_ID}&access_token=${process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN}&count=9`;
			axios.get(URL).then(response => {
				const data = response.data;
				const mediaObjects = data.data;
				this.photoURLs = mediaObjects.map(
					media => media.images.standard_resolution.url
				);
			});
		}
	};
</script>
