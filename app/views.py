from app import app

from flask import render_template, redirect, request

def calc_water_use(nres, nbrush, nshave, nshower, tshower, bwashm, bdishw, bpool ):
    personal_usage = 0
    household_usage = 0
    
    personal_usage += nbrush*16
    personal_usage += nshave*16
    personal_usage += tshower*8 #multiply by nshowered

    household_usage = household_usage*nres

    return personal_usage #, household_usage

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    if request.method == "POST":

        r = request.form
        print(r)

        nres = int(r["q1"])
        nbrush = int(r["q2"])
        nshave = int(r["q3"])
        nshower = int(r["q4"])
        tshower = int(r["q5"])
        bwashm = r["q6"]
        bdishw = r["q7"]
        bpool = r["q8"]

        personal_usage = calc_water_use(nres, nbrush, nshave, nshower, tshower, bwashm, bdishw, bpool)

        print(personal_usage)

        return redirect(request.url)

    return render_template("quiz.html")