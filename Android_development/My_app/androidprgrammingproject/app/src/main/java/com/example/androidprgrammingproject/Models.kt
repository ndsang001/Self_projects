package com.example.androidprgrammingproject

//class HomeFeed(val photos: List<PHOTO>)
//class PHOTO(val albumId: Int, val id: Int, val title: String, val url: String)
class HomeFeed(val data: List<DATA>)
class DATA(val id: String, val name: String, val logos: LOGO)
class LOGO(val light: String, val dark: String)