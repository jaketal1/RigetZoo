import csv
import os
from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

# Route: Home Page
@app.route("/")
def home():
    return render_template("index.html")

# Route: Bookings Page
@app.route("/bookings", methods=["GET", "POST"])
def bookings():
    if request.method == "POST":
        # Get form data
        full_name = request.form.get("full_name")
        email = request.form.get("email")
        phone = request.form.get("phone")
        date_of_visit = request.form.get("date_of_visit")
        number_of_tickets = request.form.get("tickets")

        # Capture the date of booking (current date)
        date_of_booking = datetime.now().strftime("%d/%m/%Y")

        # Convert date_of_visit to UK format
        uk_date_of_visit = datetime.strptime(date_of_visit, "%Y-%m-%d").strftime("%d/%m/%Y")

        # Save data to CSV
        file_exists = os.path.isfile("bookings.csv")
        with open("bookings.csv", "a", newline="") as file:
            writer = csv.writer(file)
            if not file_exists:
                writer.writerow([
                    "Full Name", "Email", "Phone", 
                    "Date of Booking", "Date of Visit", 
                    "Number of Tickets"
                ])
            writer.writerow([
                full_name, email, phone, 
                date_of_booking, uk_date_of_visit, 
                number_of_tickets
            ])

        # Return confirmation message
        return render_template(
            "confirmation.html",
            full_name=full_name,
            number_of_tickets=number_of_tickets,
            uk_date_of_visit=uk_date_of_visit,
            date_of_booking=date_of_booking
        )

    # Show the booking form for GET requests
    return render_template("bookings.html")

# Route: Loyalty Page
@app.route("/loyalty")
def loyalty():
    return render_template("loyalty.html")

# Route: Education Page
@app.route("/education")
def education():
    return render_template("education.html")

if __name__ == "__main__":
    app.run(debug=True)
