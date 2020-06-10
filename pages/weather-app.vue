<template>
  <v-container>
    <h1 class="display-1">Weather App</h1>
    <v-flex xs12>
      <v-card color="blue-grey darken-3">
        <v-card-text>
          <v-layout justify-center>
            <v-flex xs-4>
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="weather icon" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">{{
                  weather.weather[0].description
                }}</span>
              </p>
            </v-flex>
            <v-flex xs-4>
              <h4>Wind & Pressure</h4>
              <h3 class="headline">
                Wind: {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}
                &deg;)
              </h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }}
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hPa
              </h3>
            </v-flex>
            <v-flex xs-4>
              <h4>Other</h4>
              <h3 class="headline">
                Max Temperature: {{ toC(weather.main.temp_max) }} &deg;C
              </h3>
              <h3 class="headline mt-4">
                Min Temperature: {{ toC(weather.main.temp_min) }} &deg;C
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          label="Enter city name"
          solo
        ></v-text-field>
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  asyncData({ params, $axios }) {
    return $axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.weatherAPIKey}`
      )
      .then((res) => {
        return { weather: res }
      })
  },
  data() {
    return {
      city: 'London',
      weather: {}
    }
  },
  computed: {
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  methods: {
    getWeatherInfo() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.weatherAPIKey}`
        )
        .then((res) => (this.weather = res))
    },
    temp() {
      return this.weather.main ? this.toC(this.weather.main.temp) : ''
    },
    toC(_kelvin) {
      return Math.round(_kelvin - 273)
    }
  }
}
</script>

<style></style>
