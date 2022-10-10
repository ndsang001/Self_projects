package com.example.programmingproject

import retrofit2.http.GET
import retrofit2.Call

interface ApiService {
    //@GET("/api/breeds/list/all")
    @GET("/books/50")
    // @GET("/fact")
    //@GET("/posts")
    //@GET("/images/pizza/")

    fun getPosts(): Call<MutableList<PostModel>>
}