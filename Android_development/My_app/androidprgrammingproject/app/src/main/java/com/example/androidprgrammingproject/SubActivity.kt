package com.example.androidprgrammingproject

import android.content.res.Configuration
import android.graphics.Color
import android.os.Bundle
import android.os.PersistableBundle
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class SubActivity : AppCompatActivity(){
    lateinit var recyclerView: RecyclerView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        recyclerView = findViewById(R.id.recycle_view)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = LeagueDetailAdapter()
    }

    private class LeagueDetailAdapter: RecyclerView.Adapter<LeagueViewHolder>(){
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): LeagueViewHolder {
            val blueView = View(parent?.context)
            blueView.setBackgroundColor(Color.BLUE)
            blueView.minimumHeight = 50

            return LeagueViewHolder(blueView)
        }

        override fun onBindViewHolder(holder: LeagueViewHolder, position: Int) {

        }

        override fun getItemCount(): Int {
            return 1
        }

    }

    private class LeagueViewHolder(val customView: View): RecyclerView.ViewHolder(customView){

    }
}