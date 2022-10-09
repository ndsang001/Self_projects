package com.example.programmingproject

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object ServiceGenerator {
    private val client = OkHttpClient.Builder().build()

    private val retrofit = Retrofit.Builder()
        //.baseUrl("https://dog.ceo")
        //.baseUrl("https://catfact.ninja")
        .baseUrl("https://the-dune-api.herokuapp.com")
        //.baseUrl("https://foodish-api.herokuapp.com/")
        //.baseUrl("https://jsonplaceholder.typicode.com")
        .addConverterFactory(GsonConverterFactory.create())
        .client(client)
        .build()

    fun <T> buildService(service: Class<T>): T {
        return retrofit.create(service)
    }
}