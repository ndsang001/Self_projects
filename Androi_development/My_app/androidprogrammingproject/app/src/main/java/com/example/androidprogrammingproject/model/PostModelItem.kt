package com.example.androidprogrammingproject.model


import com.google.gson.annotations.SerializedName

data class PostModelItem(
    @SerializedName("author")
    val author: String,
    @SerializedName("id")
    val id: String,
    @SerializedName("title")
    val title: String,
    @SerializedName("wiki_url")
    val wikiUrl: String,
    @SerializedName("year")
    val year: String
)