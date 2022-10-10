package com.example.androidprgrammingproject

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.GsonBuilder
import okhttp3.*
import java.io.IOException

class MainActivity : AppCompatActivity() {
    lateinit var recyclerView: RecyclerView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        recyclerView = findViewById(R.id.recycle_view)
        //recyclerView.setBackgroundColor(Color.RED)
        recyclerView.layoutManager = LinearLayoutManager(this)
        //recyclerView.adapter = MyAdapter()

        fetchJSON()
    }

    fun fetchJSON(){
        //val url = "https://the-dune-api.herokuapp.com/books/50"
        //val url = "https://jsonplaceholder.typicode.com/posts"
        //val url = "https://jsonplaceholder.typicode.com/photos"
        val url = "https://api-football-standings.azharimm.site/leagues"
        val request = Request.Builder().url(url).build()
        val client = OkHttpClient()
        client.newCall(request).enqueue(object: Callback {
            override fun onFailure(call: Call, e: IOException) {
                println("Failed to execute request!!!")
            }

            override fun onResponse(call: Call, response: Response) {
                val body = response.body?.string()
                //val body2 = "{ \"photos\":$body}"
                //println(body2)

                val gson = GsonBuilder().create()

                //val homeFeed = gson.fromJson(body2, HomeFeed::class.java)
                val homeFeed = gson.fromJson(body, HomeFeed::class.java)


                runOnUiThread {
                    recyclerView.adapter = MyAdapter(homeFeed)
                }
            }

        })

    }
}