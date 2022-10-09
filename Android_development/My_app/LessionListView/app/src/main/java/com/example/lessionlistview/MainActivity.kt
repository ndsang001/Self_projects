package com.example.lessionlistview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ArrayAdapter
import android.widget.ListView

class MainActivity : AppCompatActivity() {
    lateinit var test_list: ListView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        test_list = findViewById(R.id.test_list)
        var users = arrayOf("Risto", "Jukka", "Kari", "Teemu")
        var users2 = arrayListOf<Users>()
        users2.add(Users("risto_hietala", "Risto", "Hietala"))
        users2.add(Users("admin", "Admin", "HighAdmin"))
        var adapter: MyAdapter
        adapter = MyAdapter(this, users2)
        test_list.adapter = adapter
        test_list.setOnItemClickListener{ parent, view, position, id ->
            Log.d("Test list", users[position])
        }
    }
}