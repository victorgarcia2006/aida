package com.example.mobile

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.os.StrictMode
import android.widget.RemoteViews
//import okhttp3.*
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import java.io.IOException
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response

class EmergencyWidget : AppWidgetProvider() {
    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        for (appWidgetId in appWidgetIds) {
            val intent = Intent(context, EmergencyWidget::class.java).apply {
                action = "SEND_EMERGENCY_POST"
            }

            val pendingIntent = PendingIntent.getBroadcast(
                context, 0, intent, PendingIntent.FLAG_IMMUTABLE
            )

            val views = RemoteViews(context.packageName, R.layout.emergency_widget)
            views.setOnClickPendingIntent(R.id.btn_panic, pendingIntent)
            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        if (intent.action == "SEND_EMERGENCY_POST") {
            // Permitir red en el main thread temporalmente (no recomendado en producción)
            val policy = StrictMode.ThreadPolicy.Builder().permitAll().build()
            StrictMode.setThreadPolicy(policy)

            val client = OkHttpClient()

            val json = """
                {
                    "body": "Soy Victor Garcia y mi ubicacion es 48.8566,2.3522"
                }
            """.trimIndent()

            val requestBody = RequestBody.create(
                "application/json".toMediaTypeOrNull(),
                json
            )

            val request = Request.Builder()
                .url("https://aiden-production.up.railway.app/twilio/send-message")
                .post(requestBody)
                .build()

            try {
                val response = client.newCall(request).execute()
                if (!response.isSuccessful) {
                    println("Error al enviar POST: ${response.code}")
                }
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
    }
}
