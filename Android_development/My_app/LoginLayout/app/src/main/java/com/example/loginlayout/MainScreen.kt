package com.example.loginlayout

import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.graphics.Bitmap
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import android.widget.Button
import android.widget.ImageView

class MainScreen : AppCompatActivity() {
    lateinit var image_button: Button
    lateinit var logo: ImageView
    lateinit var web_button: Button
    lateinit var back_button: Button
    var image_intent: Int = 123
    lateinit var sharePreferences: SharedPreferences
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_screen)
        var admin = intent.getBooleanExtra("com.example.loginlayout.mainactivity_admin",false)
        image_button = findViewById(R.id.camera_button)
        image_button.setOnClickListener { view -> takeImage() }
        logo = findViewById(R.id.logo)
        web_button = findViewById(R.id.web_button)
        sharePreferences = this.getSharedPreferences(getString(R.string.preferences_filename), Context.MODE_PRIVATE)
        val username: String =
            sharePreferences.getString(getString(R.string.user_username), "error").toString()
        Log.d("MainScreen",username)

        web_button.setOnClickListener { view -> go_web("https://web.centria.fi") }
        back_button = findViewById(R.id.back_button)
        back_button.setOnClickListener { view -> go_back() }

        Log.d("admin",admin.toString())
    }

    fun takeImage()
    {
        val takePictureIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        try {
            startActivityForResult(takePictureIntent, image_intent)
        }
        catch (e: ActivityNotFoundException) {
            // display error state to the user    }
        }
    }
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == image_intent && resultCode == RESULT_OK) {
            val imageBitmap = data?.extras?.get("data") as Bitmap
            logo.setImageBitmap(imageBitmap)
        }
    }

    fun go_web(url: String){
        val webpage: Uri = Uri.parse(url)
        val intent = Intent(Intent.ACTION_VIEW, webpage)
        if (intent.resolveActivity(packageManager) != null) {
            startActivity(intent)
        }

    }

    fun go_back(){
        val intent = Intent(this,MainActivity::class.java).apply {

        }
        startActivity(intent)
        finish()
        //super.onBackPressed()
    }
}