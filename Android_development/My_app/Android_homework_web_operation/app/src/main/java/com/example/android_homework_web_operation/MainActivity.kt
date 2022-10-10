package com.example.android_homework_web_operation

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.io.*
import java.net.HttpURLConnection
import java.net.URL
import kotlinx.coroutines.launch
class MainActivity : AppCompatActivity() {
    lateinit var my_url: String
    lateinit var textView: TextView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        textView = findViewById(R.id.textView)
        my_url = "http://ptsv2.com/t/w0t1v-1652947771/post"
        lifecycleScope.launch{
            sendPost(my_url)
        }


    }


    suspend fun sendPost(url: String){
        var json: JSONObject = JSONObject()
        json.put("creator","sang")
        json.put("success","testpass")
        //var array: JSONArray = JSONArray()
        Log.d("json",json.toString())
        val ret = requestPOST(url,json)
        Log.d("return string",ret.toString())
        textView.setText(ret)
    }

    suspend fun requestPOST(myURL: String?, postData: JSONObject):String?{
        val result = withContext(Dispatchers.IO){
            var url = URL(myURL)
            val conn: HttpURLConnection = url.openConnection() as HttpURLConnection
            conn.readTimeout = 3000
            conn.connectTimeout = 3000
            conn.requestMethod = "POST"
            conn.doInput = true
            conn.doOutput = true
            val os: OutputStream = conn.outputStream
            val writer = BufferedWriter(OutputStreamWriter(os, "UTF-8"))
            writer.write(postData.toString())
            writer.flush()
            writer.close()
            os.close()
            val responseCode: Int = conn.responseCode // check for 200

            if (responseCode == HttpURLConnection.HTTP_OK)
            {
                val inp = BufferedReader(InputStreamReader(conn.inputStream))
                val sb = StringBuffer("")
                var line: String? = ""
                while(inp.readLine().also{line = it} != null){
                    sb.append(line)
                    break
                }
                inp.close()
                conn.disconnect()
                sb.toString()
            }
            else{
                conn.disconnect()
                "Failed"
            }

        }
        return result
    }

}