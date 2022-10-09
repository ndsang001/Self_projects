package com.example.lessonasynctask

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkInfo
import android.os.AsyncTask
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import java.io.BufferedReader
import java.io.InputStream
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        if (checkNetworkConnection()){
            HTTPAsyncTask().execute("http://10.0.2.2:65000")
        }


    }

    private fun checkNetworkConnection(): Boolean{
        val cm: ConnectivityManager = getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val networkInfo: NetworkInfo? = cm.activeNetworkInfo
        val isConnected: Boolean = if(networkInfo != null) networkInfo.isConnected() else false
        return isConnected
    }

    fun HttpGetAsync(myURL: String?) :String{
        val inputStream: InputStream
        val result: String

        val url: URL = URL(myURL)

        val conn: HttpURLConnection = url.openConnection() as HttpURLConnection

        conn.connect()

        inputStream = conn.inputStream

        if (inputStream != null)
        {
            result = convertInputStreamToString(inputStream)
        }
        else{
            result = "Did not work!"
        }
        conn.disconnect()
        return result

    }

    inner class HTTPAsyncTask : AsyncTask<String, Void, String>(){
        override fun doInBackground(vararg p0: String?): String {
            return HttpGetAsync(p0[0])
        }

        override fun onPostExecute(result: String?) {
            Log.d("result",result.toString())

        }

    }

    private fun convertInputStreamToString(inputStream: InputStream) : String{
        val bufferedReader: BufferedReader? = BufferedReader(InputStreamReader(inputStream))
        var line:String? = bufferedReader?.readLine()
        var result: String = ""

        while (line != null){
            result += line
            line = bufferedReader?.readLine()
        }
        inputStream.close()
        return result
    }
}