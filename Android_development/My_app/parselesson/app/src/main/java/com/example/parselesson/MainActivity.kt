package com.example.parselesson

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import org.json.JSONObject
import org.json.JSONTokener


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val testString = "{users: [{\"username\":\"risto.hietala\", \"admin\":true,\"level\":1},{\"username\":\"matti.matti\", \"admin\":false,\"level\":0}]}"
        val testString2 = "[{\"un\":\"risto.hietala\", \"admin\":true,\"level\":1},{\"username\":\"matti.matti\", \"admin\":false,\"level\":0}]"

        jsonParser(testString)
        jsonParser2(testString2)
    }

    private fun jsonParser2(parsee: String){
        val sType = object : TypeToken<List<User>>(){ }.type
        val users = Gson().fromJson<List<User>>(parsee,sType)
        for (i in 0 until users.size)
        {
            Log.i("username2",users[i].username)
            Log.i("admin2",users[i].admin.toString())
            Log.i("level2",users[i].level.toString())
        }

    }

    private fun jsonParser(parsee: String){
        val main = JSONTokener(parsee).nextValue() as JSONObject
        val users = main.getJSONArray("users")
        for (i in 0 until users.length())
        {
            if (users.getJSONObject(i).has("username"))
            {
                val username = users.getJSONObject(i).optString("username")
                Log.i("username",username)
            }
            val admin = users.getJSONObject(i).optBoolean("admin")
            Log.i("admin",admin.toString())
            val level = users.getJSONObject(i).optInt("level")
            Log.i("level",level.toString())
        }
    }
}