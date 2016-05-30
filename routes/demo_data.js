var demo_data = {
    "student": {
        "result": {
            "fullname": "Owais Chishti",
            "name": "Owais",
            "rollno": "20996099",
            "degree": "BS(CS)",
            "batch": "Fall 2099 - CS-Z",
            "campus": "Peshawar",
            "email": "p996099@nu.edu.pk",
            "mobile": "03123456789",
            "cnic": "41234-1234567-1",
            "nationality": "Pakistani",
            "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHgAXUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCh70Ud6Wvoz4kbS0tJQAcUopBS0gEpeKSjtQMKTjOaKKAFopQKKAAcilAoHWj0oATFKKKWgBKTBpe9H4UAAzmlqFrmJTgyKMe9RyalZxIC86gHvU8y7mnsqnYtYx260VHDcxXAzG6v7g1L3xTTuQ4tbidqQ5p5pKYhmKXFL3xRkE8GgdmJikzwRincUhFAhuOOlGKdSY5oAb3o56U6k70AJR2pTSYoASj8KXrRQAnejFL3zR70DEpaO1FADR1o5pe9HagBO1JntTqMCgAzmk5zQTijvQAtFFFAD+9BpDSUyRaO+aKWgBKXNJRSAWk5pRSUAJRS0tA0FLSfWlBoGHejHSl4pQOaBCYoJA6nFH44rI1XWLbTY8fflPRc0pSUVdmlKm6j5UT6lqsNjEScF8cDNcpdeIbq7fYkuwHsvpWPf3s+ozFmbav8qhhZY/8AVjI7t615VbEym/d0R9FhsFClG8ldmqs3O6Ry7f73FRXE8hQkHA91qKF8Efu93+8avLGsqkug9geR+dczk31O5RS2RRtdRuLWXekjKc54rp7fxdEIgtxES+OqcVzTCJJCoUj1UjIp0iQvGEGQe2eo/GtIVqkNmYVsLSrfGjpH8YRfditWY/7ZxVefxLfPFuQRxZ4wBn+dYUe5cLIRu7MRVsxmZQXmTGOirz/9aqeJqvqZwwFCG0SQ65qAGXuGIPbpTRq987ZW4kB9AahlhCkeUu713Hn8qcJ0giwiYkPU1HtZ9zf2FJacqLI8Q6nCdruxUd2UEVbh8VXCuBcQxuh7ocGsUvI2SJOT1GeKruwc/OAD6iqWIqR2ZEsLRlvE9DsdVtb2P90/zY5U9auEjNeYRSyQvlH5HQg811eieIBclYLk4lHAPrXdRxalpI8jE5a4e/T27HSUlLkHoaMV2HksbSGnUUANop1IaACkpaSgApPwpetJj3oAKKKWgBDQKU0lAwxRRijoKBB+FFFFADzSUuKSmIDRRQKACiiloAKO/FGaKACjn0oopAGM0dKWl7igYD1NBYDk4/GlrmfEWsMqPaWx5A+d/SoqVFBczNqFCVafKhdb8SR24aG2YM/TIrj5WknkMkjEs3JJ7Cn2lq08wZg23ryOtW2tNz7MNk9Aorya1aVVn02HwsKK0KEVv9oblvLhXue9PnmijURQBf60s6Nu8vO1F4IH9aVVhT7qbsdzWB0kSi4kTBcIvfNP8gxruSY7hzwaGaMcyZYDstMkniA/djCmgBVmkzukw2O9K04nYDbz2GcVHGnlsJAcDPU9Kt3D7iGaJVyPTilcCu0VyrKsiso/2quQp9n5YbiepJBFRx6g6R+VKN8fbnpUctyP4QcejCmBYmus/L9n/wCBLUSzb224I926GrFvcWsiBGVUb1BqtdQJG26Nic+oOKAHNjGGXaw5x/hTHTgsByP1p0Uy7QHzg8cjofrSNhH2A4pAV9u3DrytSJlHV1OCD1qYIrNgDG75WHoabbqDEyycYPWnqGnU7LRdWEqLBMfnxlWzwRW5ye1ebndEEwdrL0I9a67RtZW4gWG4IEoHB9a9PDYm65ZHh4/A2ftIGyRSUo5xg0Y967TxthKKKKBBjikoo70AJRTj0ptAAKKBRQMKDRRQAg60uMk0dKSgYUUlFAaElJ3opaZIUUUGgAooHWjvQAUtJS9qQBigUUvQ0AGKB1pRQKAKWr3LWelzzJ94LgGuAM6mMmX5nY5wT1rqPEeo28lubJHDHOZCD09q5AOFZhsBJ6E/0rzMXO87LofR5ZScKXM1qyWK/aJ+mAOg/pRNey7mVCRI/wDF6fSoFjC/OzbD24yaj8worNz7E964j0yTdlTk4wOnr7mq4lfccGmqWLZAOe+KtQwowMgJBHqOKAKxYscjt1FRn72MYBq2qma54ChgcEDvU1zZCMk49xSAr27vtMTAe2e9TNI+3YwwV/hPan/Z/NgVl+8lQtMcfvVOR0YdaAHrGswztb2xUz2Q2qrDDdtxqOKc4DKyvjqOhqaaeOdd20q3cE0wMyW1eNs56elW4dxjCsSykcrn+VS27jcVIc8cAGnMBvxIw5HBIxQBWki8jBDExk857VYuQJbYSLjeg7dxTgAB8xDxsMEjtVVWa3mBPKqOR6igCRJftMBdcAqMsKajEO6kcMc4qFXNncZAykg6+1XLaZJLlHbAA4NIB0LYYKeQDjPsaRWMcrbSeDlTUDuxdyg/iPAqaCRShLgEdRnr70weqsb+m63JEyJM2VJxzXVI4kQMp4NeaNIPMVkbcOxrq/Duo+ZGYZnAK9MmvRwuIu+WR4uYYJKPtIHRY4pKAQVyKK7zw2FJS96MCgAPSm96dSd6ACkpaTrQAh6Uoo7UUAFBoooGNop2KKAHUlLRTEFFLRQAnej1pTSUAFLRRSAXtRR/DRQAtZeuambC12xDMz8KK1OO9cLrV19q1OY7spH8q81hiKns4abndgKCq1VzbIxx5jyPI4yM/MSeM1HLOWk3k8E4aprhgAiKeAMkdqrOrPgDChzzXjtt7n09ktiyGilLSseFHFVJWWTOOFHTNEu1G8teg7+tPMMZtNyE7+4qRi2skcZ3MuTUyX6RlkYfu268VVht5W+deQOoz1rUK289qQ0ISQDBFMDOyolE0TcqcjHNXPtCyY7juCaz/JEMm5CRjsalSF2BZMEdcZpAWEmMRGOAeh/oainCl2IOATxig4wA2enIpWQgjAypFMCER4bLEjB64qUQRM3L5B7kUuzkDOQtTIARkrkD0NADI4jCx+YSKPQ80txLlezJ/KnNZvKN0Y2/Q1XaORAQ5GaAEilPZvl9D2qGVip3DpTGU5yDzS5LLg9R1pASnMkQVhkDJHsKhXchyOani5G3tninRwt8ykHaDQOwqk+X5ynnPIqIyMvTjnNOCvA33Tsb1pz2/O0Z39h60CIwHb5iuVJ5HpV60uTb3CEjO08/SqSBtmVYpID9w96lQmXJK8r3qouzuTJXTTPSbOZJ4I2QgqRng1YrnfDEySQNFuO9T2roVJwN3XHWvbpT54KR8piqXs6jiOoopPetDmCiik6UAFNp1JQAdqKKKACgdaKKBhRSYNFAEgpOaWimSFB5FLSYoGJS0lLQAUUUtABS59qTvRQHQztcvVs9PbLbWkOB/WvPpLnc5UdC2T6mt/xRcma6dMnZFhPx6muZZgGYpkcAZ/nXkYufNOx9Rl9FU6KfVkmchk5O49qc2ElYMQccUkLlXQKdozktTHBnVnXPUmuU7rFeTliMVasJVDmN1JUjnnFV1RiQCDTzAyPn8sUgsaVpG6Sum0bG6MT0qC5Wa3l7hvY8EVoRWU01rGqKCTyDnFX7Twlqd8TmMlR1JPSk5JFqnJ7HOyFpo1IGGA7d6I0mQZKnB9q67/hCdQiB22bvt7qwwacnhTWpf3f2N0HZnwMCp50WqLOYDiT5PLGT3xzUiWLZBXfu/lXd2PgeODD3LXDydx5ZAroLPwtDJIA0YCKc4IqXV7GkaDe55euh30ykrG2O9Sf8I/qEaBlt5QO/cGvb4NHgiTb5a/lSyaXERjLKD2BqPbM0WHjY8ROkXYAZoGjzxk0n/CPzygknOO45Fexy+FbOcHIOT71lTeE/sxzGJGTuFaj2rD2ETy0eH3ycxsT2wKYdCdV/1Tk59K9O+yeX+7TcH/215qJ9Lkf5i3P0qXUZXsYnmq6DPnP3O+Dya0INGeIF2OQR1IrtV0gCYktlsdTVg6crBQQPl9qn2jGqKRw11opeEBtoGOMda5y5ha1nCyMcDGHr1p9OBBGB7ivP9etBb3M1vMpHO6NscGrpzdzOtTXLoczJIXbeRgg8mmpMBJkHr1oflinSo/KEbAqdzV0nEb+gXsdlqCluBJ8pzXeDkkc8e1eYWCrcX8KNncXA4+teoKPl4yR716mCbcWjwc2glOLFPWkpxxSGu48cD0ptLR3pAJRR3ooATvR2oo7UAFHUUUcYoAKKSigZLSUtJjmmSLmiiigAAooPFA60DCijvRigA70p4Un0pBSkcfWkNbnnuoN50cpkOZHdjj8ayoIg7fMcKB8xq/qsPl6lcIeVRiuKqO4jICDDEAD8q8Kr8bPsaVuRW7CT7QjjO0KgwKSzUmMc8txgVDKWmdjjHY1bswBKoAzgis2arcsw6TdScQwtIxbCgd629O8J3s9yscse1F+Zu1dT4ctIYYFfGZCMljXTQoowc5Y9Se9c8pnZCktzE0/wtHBIryAZ6Bc8CuwtrWKJAioB9BUMe0lTjpVpGweKy5je1i/BbKBnj8qsGGNk5xmoYXwv4U8vgU7isN+zR9xkfWnhEQfKAKj87mkMtTcqxIyimECmmTNML8UikibOBTfl/Oo91GaAsRzWkU33lBPY1UksAq8MfatAPgdaikc45NAGM1uIwfWoGTuKvzHJqpIDUgirIOCK57xBYw3VuyyICQOD3FdGw5rG1lgsLH0FVHcmWx5TqFuIJSqj5fWqClFI4PWtPVC01y4AwuaonhAFx/jXctjzJbljT3C39u4AA8xefxr05fu46YrzGyjZp4EH3i4I/OvTISxhXdwSK9PAbM8LN1rFj6WjFJXoHhhScdaXtSUgDtSdqWigBKQ9aXNFAxKKKKACijNFAEgopRSdKYgpBSkc0lACmig9KBQAe9HWigUDDmlycUnNOApBexweuxFdekTHyuA5JrFm2pcJySoJFdT4rtnFxHcr0KbD+HSuVdlkUxsCHB3Ka8bEx5ajPrMFPnoRJbdQXk4+bk5PToataeqvPGQp65aqkSkkDoA21vetO1lQTQ7RjHygD1rnex1xXvI9A0g7YQPTtW9E/H41z+kA+WS3XvW0jdK4JbnqR2NKJ8VZjkrNRunNWo2qLl2NJJuKk80+tVUU4FSYNO7FYl8w5607dkdahCtk+lPUGi5Q8k03cc07tTSKAE30u+mHNIQaAHGTmmSNwaaQc0xs4oTEyFzk1WkPNTyccVVkPvQIiYj1rK1WPzIHGOQK02NUryPzIiB96qjoyZanl+qRrE8grGUbQGHbpXQ6/aPb37B/uuchqypbfACqe9d0XdHmzVmT6WM6nb8dWXH516JjAGa8905Gi1G13cYkFegKfl9a9TA/Cz57N780fmO96Slptd54wUUUUAFJS0UANpTRijtQAlFGKOaBiUUtFAEvtSE80tJQIX3pKO1LQAn8NHUc0hNAPFAxe1A60gpR1pAHelzSUc+tAGdr8Qk0mY7dzINwrz7aBcKT/C4616XfJ51jNEByykCvOZseaQRyowRXnY2Oqke/lM/ccSO63IxZeASM/Wrfh9Dc6nCpyVByazbqYsgj6AV3ngrSfJtlunHzuM89q82pKyPcpR5pHUwRCGIKB15qwpqKQ7ep4rLvNbt7Td8+SOuK5FBtne5KKOijkGQMjFaEODjGK87h8QqZfNL7UPY9TW5Z+KImPKMBgEMSAPxzWnsjP2yO7gTIFWVtz1FclbeLLLdsMyFvVTkV0VlrltImRIp/Gj2Y1ULhgI57U3y6mW9imX5SKTIJqHEtTuQmPjpmmhDjmrJAApqhSanlK5ivsp3lcVMdozzUMt5DF951GPemoCc7CGIY5FV5EAzVK/8AEdlbA5lUHHTNYUnjWy2Myud3oVq1SMnWRvykAc9ayp7mNJNpYDPSsGfxrC2Qsbluh4rDvPEfnEOV2+hFV7Ij26O23gng0NhhXG2figIQkoJ3cgiuos7pLmIPGwYHoRUSg4mkZqWxynjG23Q+YM8HiuOVm8vce1epa5aLc6fMnU7cj615Y4aOPbj+IitqTurHLXjZ3LFpd4vYS653Sr36V6GgAXg15vp8Xn6jbo2BmRc16SvAxXsYG/Kz5vN7c0RfSkIpaO1d54olJS4o60AJRRiikAUhpaDQMSkpaKAEooopgSUYzS0gFAg6d6OhxQKWgBppMUtFAAKUUUd6Biiik5pyKWdV9aTaSuxxTbSWo0qCCPWvP9atBa6pIgB2ltwP1r05Iba5Z7ZCS69T2/OuZ8T+H7nyPOUl1jHGRyK8avjadRuCPqcHlVbD++3e/Q4KeEMEK9c/pXrGix+VpkA9EFeVk/OikHOcEEV67pmDYw4/uD+VcVVHq4fS5la/evBAUjzvauQS2nupf3jtgHoOc13mpaSl5KpYnAPWmJp0UahWVTio5kjWUHNnH+bFGwjWNpGXj7hAFQM0jFi8T8joV4rs57mytAEMY3dlAyTToJRcn5bbbnqSKftkT9WbODhmdRtZTFwcY71ai1m5hfalyUwOmc12NzpfnDPkxj/gNYtzocZbL2+Pdaftl1B4eXRk+m+K7+AATSMRng132j+IlvlGeGHBrzEaUYn3RtlfQ10ugfuWw33s1LlF7FxhKO56BJeDA5pi3eEyCfpVDDvENvpTVSSOM5+orNmhBrGsG1iLZI+UmvOdR164mnc+YxOcKM4rpPEIkuJo1yeM5rnjpG8gEcD9atSijOUJS2MPzrq8faNzt69QPxoIuVkC79x/uoOldNb6KoXbHFx35xWnBpYgAIES/hmn7ZE/VX1ZycNle7NxtmweDkfyqRtKuWA/0dtp67etdluaFf8Alk344pkeqRb/ACpFMbn170e2Y1hTkj4eKxiSOWQr6lOla+gJcWkphJDRtzkdBXTRiJ1AwD9aRbSMS+Yi4b24odTmQKlyu5Ddg+Q+e6kfpXkl0/7yZP7rGvXdQO21l56Ka8cvGLTMR3arpGWI6FzQlDajAxGQG5r0UdBiuQ8Oae4PmrCXY4x2A+td0tlIIxucbyOFr0sNiaVJcsnqzw8fgcRiHzwjoirRSurK5B4wabXppp6o+cacXZgc0lLSVQhTSUUUAFGRjHeikNABRS0nWgAopKKBktJ3zR3o7UCFNJ9aD2ooAMe9FFIetAC0d6bzTu1ABVmzQPdID71W7irWn83sY6ZyKyrfw5eh04S3t4X7o3NIs44rKSXaNzE5NTzwJJavFMowV61LahRpwjHLF8AUmoSJHCu9wMcV8mtD9Fd3Kx4V4jhS28QzwwMPLDcc969M0bP9mwZ7IK4fxnpwt/EEWxflk6YHXmu+0qIpYxKRghRXRJ6I5acbSkWZPu5rMup1QHcSOOwrdEasnNVZ7JTG2K57nVCy3OLa6nuLrytNtGkkPV2GMVf1e01vQtGOoSagIpsqAkS9z71owRy2Nz5qEnnkCtu/Fr4k0eSynWSOQj5TjIBrek4W13MK8JvWL0PNxq/iOLUrW0a9gaa4VXUmRSuG6bj0HvXbWLajeaMt7PaxzRZIdoT8ykcE47iuWi+Ht19uVZ7uBI88sCc4+lep6fdaboujx2NsruqLt4TOa1agzCHtUcc9rFKokhOVbpnj8KbbwvHNyCK0rryHvma3hkiRyd424H1+tKvztk4z6iuSdk9DvTvHU1tNYumCeas3Q2Q+pqrpylXq3ejdEaV9CbHKXql5cYySafa2O4ncPlHU/wCe9TsMXHIzUtzNiFY8GNZWyXQZIH+NCVyr2IWwX8i3gkuHX+CMcL9T2rktW8TahaKXTTxFbiQxiYglSw6jPrXqujXmmWtp5EZ2BhyWGCfqe9eW+LfCF8b+RrCU3NlJIZEjV/uE9eO1dUKcLanJUqVL2RNp95rd/qLWU1pDFcJGJFilTDMDz2qO6nmsZhHqtg8G4/6xeVrX8GeH7nTZW1HU5SJSm1EdyzYrU8QXMeoEQxxb1U5LMvWicYWCm6jZmafdRtHiOYSL1BFatvIXFZthpEcYyFVc+n+FbEcIiTHWubqdMjO1XP8AZ9xxzsOK808PaYdX1pLZtu1G3t616fqQP2Gf3Q1x3w8iVdauZGHzhMKfTmtoO0Wcs0udHoVjo8FlGFRRuxUGsaWkluLmMYmTkEHtW5byLiTPcYHtUMkZlsrhfQZrDdHUtGcndDmNx/GgNQVblB+yREjozKD7Zqp3r6bAz5qEWfB5tTVPGTSCkNLSYrrPOFHSg9KQHnFFAB2o7dKDnFBz0oASgUYoz2oATFFOAJooGOoowRRQIWkoNFABSGlNJ0oAO2aWjtQKAAdans223kTH+8KgpVJUgjqDmpmuaLRpSlyzUjq4XMTTZAxGSR+NULtTqDqnO3OcVPv8y0kfu0YJpNEljluQrdutfIyVpNH6TCXNBTRy3jvSmgbSnIGGk2qx61u2qhYI8elQ/ERd1paXeTtjuQFB9KltH3xqR0wK1fwmH2mX1GRS+XmiLpVyOPdWJujPazD9AaaNPlXlCRW5FDzyKtLAMVSVw5raHMGxnZsmRifp0qRbN0+/I1dGYwABgcd6pXRXp29qu1uoc7ZhTIq5Cg59c1Hbx/NmrkiDJY02BBmsW7sroaNnH0NWZ13R0WoGz0qaTBX8KdgOZuoDvyKdCQwCnII7+tX54xk1WSL5uKE7CFcThcq2fqKqMkzNlhurZhGOGGQatLaxdQvHerV3sF11RirJOY1jwNoHGFApgtXJ6cH2rohZoOcU14AOgxQ0+4m+yMRYdg6U0gjitOWMAVRlTk1PURm3ql7aRB/dNc54MszCb6VFDSBiAfwNdLdHA/DFM8FxIlrNLgbJZWVvzrT7Jl9tMTSdTuFmeO4bJB4GK6BpQkUr9mjNc7qUH2S+dl6ZzxWlFL9o09cnljisdnY6HrZmTd/JaWqdypc/iaodKuajKJL1scKmEA9MVU719ThIclGKPz7M6yq4qcgNJSn0pK6ThE70UtFAB2oxS0UANpaCRQOaQBmijHt+tFAx3ekxR37UvamIKBSUDNABSUpooAB0oFAooAKKKWkNG/pz7YImPKkFWHrVd7SSx1Frqzb91jLI1GlTAxNCeueK04iVLLIm9TxXy+LpuNaSP0HL6ynhotdjnPFN7Hqnhy4jjJE0DB9pHJ+lR+HLwXFlHk5IGK1Nc0yD7BPNAuDsJOBXFeFLspO8Jb5d3FKmrx1NKmkk11PRowCBV2EciqED5UGtCEismjVMvxLmrG39KrxEYq2OlNDIJEOKz5kAycdq1WWqFwAPc0NDRjXJw+KIRzTbkASZp0Jz0rNLUp7GrB93GKkkwE4qO3BwM1NNHuGQTVWAzpOtQj79WJVIGaq7huosSadugZRnrVxITjA4qnaNjGa1UwQMd6pIVxoiJ70kkQAIqcMKil+4SRQBmTrVCVflPrmr8571nTPjmkJmDrdx9ngkcdlqXwSzJ4fMzjh5GKiuZ8X3+1PJUnLnnFbVjb6guj2NtY8qI8u31rSWkTKHvTsTa1eCS4WGP5pH4wK14Yfs9lDGfvAbjTLXTVtY0muEUSg8k9adf3Gy0eTPLDC1FODlUSNK1VQpt9kc9I26Vz6sTTaTrzRX1kVZJH5vUlzSbFptONNqiR1FFFABR2opM0CDGaOlL1pDSGFFHFFMB3ajtRRQAUUUtADTRQetHSgAopaSgApTSUtIB8ExgmWQdQea6eC4imjDrIOR0J5rlCB0pQSo4JrixWDjX12Z6uX5nLCe7ujr5hHNbPGSMMpHWvIbJvsutTQqRhXIB+hrsN79NzfnXFXQWHXJ8YX5icHvmuCeDlRjdu57lHM4Yqailax6Tpt350Kn2rageuJ0S5Plrz2rrLaTODmvPmevB3RsxNiryyHbWXE/SraycVKZqWWcY61Tl5WpN3aq0sg6VQjMljMspOMAGp7eIBgKp3uqR2MZZ1J5/hGaLXUXdVkMDop5BNJId2dLbWxOMCpngYttA5xVSx1IMg5HtV37bj5sjNOwrszri3K8MKoNa5JxTtZ1hLWNpHOTn5QOrH0Fc7JrurRETf2f+43AE7/mGfahhdnS2+5Dtbr2rQSTbwT+NY9vei4RZCMHHSr8cm6hWFY0FlGOaZLIcc9O1QKxPDetMmbikMrzycHisS+ulijYk/KBWjcSnGc1yGt3QCsp5yaIq7Im7I5m+ZtT1aOIZJZuK9S0+P7NbRooIwoFeW6QSviKCUrvCHcR7V6KuuRlQDEc966JUKk0uVHHHFUabanJJmlJGZCGZs81z+q3Ikn8pfupUtzrLshSFSuRjJrK68k5J616GBwcoy55o8XNszhOHsqTvfcOKTIpaK9Y+bD3popcUCgBaTNFKKBgKO1FBoEIKWkFKfWgYlFLkelFAC0DpS0dqBAOlHNHajtQAlAoooAKSiloAQdaWkPSlFIYtJRS5oGNOcVxOvHZrbEDjA713HWuV8V2mZYLrpztbiubFq9M9DLZ8tfXqaWlyjcuwY+Xk119pN8vNcPpn+ojVGJOc5NdTZv8y8dTk8189M+1p7HSwyZAq2j1lQuc1bE2Fyax6m62Lck2xeTWbPdgZJP09657XPEi2kvlg5OSKw/7cMjqJGPzdwccVqoNozlUSdjqrq4gl+WUjB6HvTbW9ihby/N3Adie1cjPfmRlCsygtjr2Peq9lqnnXUgO4E5GSOnpVKDIdU9ObZhZbOQFgMvHUb6g/oQx7V5zYeJp7K6zI7MM5AHeuvGvwSaes5X95gEjFU4WEqlzWSKCRWlu9vmdUX0qhdTxE7A3HXA71ymoa7Ix86OVyBleKxotanlu1cZwpGcn9KOQPbJM9Ftr6P7o6dq04rroQa8xTWH+dRJhgehq3B4gmjVhuDp1xnBFZ+zZXtkepJMGGRUU8u1CSa5fw9rovBs37j2zW9M4daiSaepopJq6KV5NiM4PUVxWsymR0UNkg/NXUahLtTj0ridScxMSfmZjWlJGVV6DvDaFrq4c9lC/rXR/SsLwyn+izSH7zPj8q3q+jwq5aaPh8xnzYiXkNNFIaUdK6DhCiiigQUHpR3o70AAooooAKU0lJ3oAWg9qKU9KAEooooAd2oo7UCgAopTSUAIaB0oNFACUtHeloATtRR3paQwpKOaKACsbxJH5mmHHUHIrZJqnqUJnsZFXk4zgd6iavFo2oS5akWYvh26DRGN9vPGMc11tqyiUKBgLXnNn5ttckgkbDlvau702dX2tuLMwz0r5utFxZ95h6ilE6GN8U+5lKWUjrnIB6VAhJKrj61OyiSIxnuK5jq6Hk11dPNeSO5ZlJOFA59qmiQuBhSrEjgj7o+tdjZeHFiuJPkBJfIYin3/hKb5Z4pyG6lcd66FVVrHN7Ft3Ocn01227c7R1qlNpN5CizxgkgjGB7V1CWl2ZPL3qD33LVsafdRqVDgr354oU2afV7nJW+jzSxRSKMsxx/un0rWubScW8EMUb7lBJHr61tx6dcxt+6UYbn5SDzT2+2oceS5bpmnzMpYZW3OO1DS7hXVUztfnbjmqUOmzW5ZZEJbG413L2l7y5RQ2OCx6VVOkahPu3bQrHls0+ch4Y5yHSGlt2blW4Iz3NZr2dwMrsZWz0x1rtn0+6ijWLzUC+irzVrTtCEAaSeXfI3TPOKn2lhPD6HG+Grie31mNHBTLYIxxXprv8mfasE6UhvVk2gYI6CtiU4QKOwrKcubUunFxVjKvnDK/t0rjtZwASGGR2zXT6g+0MRwDnBritSY3FzHboSXc7elbUY3dkY4iSUTp9CiEWkw+rDca0qitoRBbpEP4QBUhr6SCtFI+CrS56kpCUUtGasxEo7UtFMAoxS0UgG4opaKYAe1JS0hoAO9B7UUvYe1ACUUUUAONAoI5+lAoAWkozRQAneg9KO9L1FACd6XtSd6XtQAneiig9aBiZoopcUgEoxn60opaBnGavH9mvWbYV3tgk9DWxpDmFUwxYenpVzU7CC7tpBIo3Y+VvQ1gWNxLbTi2LHdnALDrXj46i17yPqsqxUZR5XuegW8pZQehNXVYdetYdjkDnBbHTOK0VuAu3d8oPSvIa1PodDSiALZxVxl3R8jPFZ9vMrgdPwNaKN8vFIDOlgRn4HNPjGzGBn2NWZkyMisa9u5LZgQOKuLsVzG2Cu3JiX8KhYg4G0gA5rmrnxDNEDsUnA6VlyeKr9RlQOvpWiuw9slud8HDDJhB/Cq8m9sjgVxcfi27Y4dT17d62LTWHusYH60O6WovbRexqeQN2WGTUuwEA4psT71yTT92elYt3E3cicAHpVWd+Ksytjms+eUDPNMSMLWWKx49P0rB0i2F5qzXBztiIx7GtHV7oyMYl+852irumWS2dvhR945J9a9PA0XKXMzws3xShT5Vuy9SGl7Uh6V7Z8ixe1Np3am0ALQaKM0AFLjmk70uaBBjmikpRTAKbTqbQAUvakpaAEooooAd3oXrRSr1NACHrQaOpNFABR0oooASloooATmiiikMKKKKAClFWoNPmmXeRsj/vtT9tnCzIGMzj8qwqYinDc7aOArVdUrIoshbb1wD6Vlatos0iNcQxnK8kgc11kEqnI2KM9sdKknceVt67uB71xVcZGUWkj2MLljpTUnI4GDxDLFHHFIh3Icb8c1sw6m8zqXL7GHVhUGv+HJZFN5aj5lGWT1/+vWDb3LMv7wnYpwcHpXlNJ6o97nlF2Z3djOyyKFIIJ9a6KCTeoGa4SwvIVGYidqgZZjjFdHZ6gvyqGyx5qHE1UzodmRVG5sFmPzYFTW99GwBJ4PSobvUI8cdB37mjlK5jIuNLhjy23LN1rKTSoZZHRgF9Ca2fPFypdT0JJyO9RSW6eTk5I6H8Tn+tWiWzJOgxsv7vIZOQK09O0wwdcHv05FTLJHtDHIY8MM+laNrMhwpBBqWONhBHsGAKRvlWrMm0A1k3tyUViB0549KhR1KbILu+QEoWAbsD3rDu9RREYOckZIGelQ6jex3A+V1Rxn7w61iwmW8vFiAzngkVqo2VzCVTWyLFjC97qHmJvJU5+nrXTgbV2+nFYVxet4e1GFI1A86IFvfmuxsmt9ZtgWwkvHzKOa9LC4mMIpM8LMMBUrScoPYyqQ1ZurSS0m8t+/Ruxqse9erFpq6PmpwlCVpIUUlLSGqJCjFFFABgUUUUCCiiigAoopDTAKBRRQMWikzRQA49aBRxQD3oAQUtHejtQIDR2oNJQAtGKM0ZoAKSijNAwrb0XSROPtNwv7sfdHqazbG2N5eRxAdT8x9q7cRLDbiJAAoGBXFiqzguVbnrZZhPay9pPZHD+MdYOnxrHCAA3T2/CuatdUEsRk3/AD5ycd60/iLaO8KTJ/ASSMV53BdtEflY15Ld9WfSo9Ttrgbc5wR+XNXBMJNqqRgHoK4TTdeBiEbkjFdJpN59qnAzkg5x6VMnoXBe8dSih48HoRiuF8T6ALGV763J2k5K7cgGu8hHApl9bC4tmTAJPZq5Yys7nXKKkrHk0OoyBgh5PVs9BXR6bdnYXdtpVSxPtWTrGliwv5HwYNwG1WGQ3rgisz7fMI5I1BDtgfSunSSOVtwep2lvqryWsjoMbRu61YhvHmijkBPy4J71xdreyLAYlP3h8w71v216kdoqMwDcqQPWhxHGZqNegqWifC7ssSaJtVBgCbugyfrXM+eImZS54J4z1HrVZ7nzOOVAHAPejlD2nQ3o9UMt1gnA4/8Ar1r/ANolXRlb5SOfauNEytLlcgKRgfhVj+1CySHoexNDgJVDqF1ktuDMd2doFU7jUWL7geB1rmzdEvuZurAjmoJ77Nu2w/Mx6DtRyIHUY6/uN8zKAS+cjHWux8L6J9kg+1TDM0igbSv3RWL4Y0GS9kW/nztY/KMdcV6EQAvHYYrKpLojWlDXmZ5p4/8A3eo2bdvLYfrWp4R1HcY48YJHzEnrWf8AEdcTWLeocfyrM8LTgXC/MQQfWtIbGNRe8eyPbxX9oY5Bxjg9x9K5S5t5LWd4pBhgevrXVaaf3QIOcjOabreni8tTLGo86MZ+or0MLX5JcstjyMxwftY88d0cnTaXGKaa9Y+YHUU2gE5oAXmgZoJpMmgB1JR0pKAFopppc0wFopuaM0AOoptFAD8D0pCKdSHpQIB1pabS0DFpKWkoEFFFJ3pDCilpyKXdVHUkCgaV3ZHS+GbUrG85HL/KuR2Fb0gOPw9Kr2MIgt0iXjAAqyw4rw60+ebZ9hhKSpUYxRyHiyy+1ac464Hp7V4XJuileM/wsQa+jdWt/PtJV9V614Frdk0OtToFwpO786xZ02fQoRyPuwucnpivRPBdpcx+ZNcAqXA2g9QKxvDWlRJD9pdQzE8E9q7vSodq59TzXNUqfZR10aLXvM3IeFH0qfAIqFOgqcdMVkbGXqen29/btDcJuTqPUGvOtX8MXNvI5tkZ4hkjHUCvUplqqVAbkcfSrjNxInTUjxb/AEm2lIaNlcf3hg1NHqQ8lEYfNnJzXrVzpNnfcywIWx1xXK6n4IYyM1lhN3UGt41EznlRktjivtZ35JJbP51P9rjx3zjn2roovAF468ON465PFQXXgPWI0+WFXwcEoev51fPEzdOdtjAN2cYHQg45/Wj7X8mchjjFbcXgPWJdvmKsKnrvbP8AKtm0+HSIM3FwW9gKXtIoFSmzh1ae4kEcKPIzcDaK7jQPBDlEm1En5hnyh2+tdPp+hWOnqFggUEfxEc1tKMKOKxlVb2N4UUtyGG3jt4VijQKqjAAHSlccVMajfpWTN0ec/EoYgsm9HYfpXM+F3b+0wg79RXc+N7P7ZpuQuTES1cT4StTLryIMnAzj8q3pvQ5qsbSTPbdMRhAvHQc1qDgcj/69VrOMpEmMj5efereDWy7mLOL1mz+x3rBR8j/MvHSs4122q2Av7NlHEicof6VxbqysVYYKnBB7V7GGqqcLdUfKZhhXRqcy2Y3jFFJRzXUeeLRSUtABQaSkzQAtJRk0ZpgHelpM0hNADqKbmigZL2oP3aM8Uh6UEgKUe9IOBSjrQMKb3pxpKQgopafFBJMcRoWPtQ3bVjjFydokYHFaeh2nn3wc8rEMn61La6NvKiVj15Va6K2tYrWIRxKFHfHeuKvio8rUT2cHltTnU6mxYj61MQOelQr1qwMY4rzGfQFWeMNGwI7V43480422pRzgfK+V6V7cYw1cX490R73R5HiXMsJ8xQOpx1qJbFx7HLeHrfdpUR65rrLOLYgGK5zwfiTTNh6xtiuujj2gZria1PRT0JVGKmXpUY4p4oEJKuRmqjrV1ulQMOooAiiGanxng1Ei4PFWFUkUITFjkCMAenepZZ49uAc/hUJiOKYIue9O4+g8fMKawpdpo2nvRcmwxRlqsgEimRpzU3agCNhVeQ9andhVZ+aARi6rGJIGUjgg5rlfh5pxm1e8nx8sZCD8a6zWZFg02eVjjCnFWPhxpIt/D63LRgS3LmRj7Z4/StKJlX2R1cMW1APSpCKsbABzUUgHauo5GQ5wa5/xBpm5ftcK9B86jv710B60jKrKVYAgjBBrSlUdOXMYYijGtTcJHndFdRqGgwu+6HEbHn2NYFzYXFr/AKxDj1FevTxNOovM+YxGBq0d9UVqKO1FbHHYSiikNAxetIaM0hoAM0GikzQAtFNopgT0dqKQfWgQvFGaQVJFE8rhI0LMewpOyWo0m9ER1Yt7Ke5OI0JrZstCA2vcnLf3B2+tb8FogAKrtXtxiuKtjYw0gerhcqnUXNV0Rz9voCDDTsWPXA4FaAt0iG1EVVHYCtSVMDp9KrTKFhPrXmVMROpuz3aOEpUV7qFtIxsZ+/QVNSwKUtUyeopeMCpWxs9wUc1ZQEAVCg5zVgCmA8DPv9Khu7ZJYGV1BVhgj1qdcjoakPK4/KlYtHkWm27aD4muNPk4hkbMfpg9K7YRgrwKzPG+kM6xahED5kJw2B1X/wCtU+iX6XtmnJ3qMEGuSpG0jtpu8blrGDjFLipmTKnFQ5xweKgsCcVC/Wnk+lRMaBj4yM4q/GgIrMHPNWopygwaCS75PtTTDjrmhLrNK1xkU9A1IzHioXOOtOknqsSWOTQxEyNSs/FRBwoqN3yTSGhzvUPLH2o681Hc3C2ts8rnAApDOc8UTG4mtdKiPzTuA2PrXpmm2qW1nFAowI1CgY7Yrzfwratq3imTUJhuSAZXPTJ6V6onC+tdNGNlc5a71sKyjGKrOATVlidvTmoH/nW5zsquMGm1K5+bFNxzQIo3zENFUTAElXUMjdAasX0ZYI4/hPNMUB0x6VN7O6DlurGXc6Db3Cbrc+XIecHpWDdWNxZsRLGcdmHQ13UcW5OKXyUcbJQPxHFdVHGThozzsRllKrrHRnnR60lddqfhtJcyW+I3647H/CuVuLeS2lMcqFSPUV6VKvCqtDwsRg6lB+9sR0UlIeTW5zDqbRTT1oELRRRQBYNOjieV9iIWY9hWraaDPNtac+UhHfrXQWtjBaLthTkDknqa5auLhBWWp6OGy2pU+JWRhWmgswEly2wf3R1Na0EEFsu2GML796uupCZ71Aq5Y5OPU15lXEzqM97D4KlRXurXuWbePI9zVxMFtvYVw0/xP02xvntV095oEba8+/BPuBVqX4meGre1aSAXc0x6RlNo+m6snTkdKmkdXKQzcsqqvVmOAPqTWbe6jpW3YNZ07cOo88ZryHxB4p1HxJc/MGjt1yUgjJwPr6muekhnLDEEh/4Ca1WH01JdTU+jYmWS3jZGDoQCGByCPWl6nHoao6SxGiWWV2nyEyvpwK0EUbs1mVuTRrwKfg8cUL0xincY70DSFX35HpUo6VEDUgP+zQMrXkCzQOrrlSMEHvXmxil0LWGiBPlg8H1HrXqbcr6ZrlfEul/aIfOQZkj5HuKzqRurm1GdnZkttMtxArocgikdK53Sr/7M/lsflJ4rpQ4kQMpFch1lNhjpUbHJq1IlQMufWkxjUNTDmq/KGpFcUJiaJgp7Gl+b1FRiWgyjFO4hxx9ajLUjSVGCWNFx2HM3FNGSaH46VJEvy5IpBYUAAZ9K5fX74ysYEPyjrjvW5qNz5UZVeprG07TjqOqIpBManLmmlfQd7K7Op8G6V9g0pC3Mkh3t+NdUv0IFVrZFijUYxx0FWh/P1rsirI8+TuxD0Oagc9sVYOQOcVXcH2qyCs+Q1Lnihgd3Sl2/LQA3aGDA9xWOt/psNxsk1ewRgcEGYZBrcj4BFfOuuoy+Ib/ZGwX7Q+Aee5qow5mS5WPoO1kjlXfBLFPGejwuGWrEsZxnaR+FfOdpe6jpkgntJbi2b1jJGa2I/HviZZAx1e4bb2fBB+tU8O7i9pc90Q7kwecVRvbKGdcTRq49cc1ymi/E7SZYANXjmt7jHzNCm5WP9KhvfitYiUx2OltNCDzJM+1j9AKmNOcX7o5uMlZl+88OYDPaMWI58s9awJIpInKyRlGHYiup0XxLpmvJutJfLnAyYJCA4+nrWrd6fDfJtmjz7jrXXTxc4aTPKxGWQnrT0PPs+1N61vX3hu4hBe1Pmp1C/wAQrDaN4ztdSp/2hivQp1YVFozxauGqUnaSG8UUUVrYwPSwBkdOfWnbeOlYb+NvDVvHum1As2PuRxkk1iXXxW0+JT9j0uWZhwpnfA/IV877Ob3Pt+ZI7CY446/Suf8AFOof2fpDwowW7ul2RR5+bB71wep/EjxFfMyQXC2cbcBLdAD+fWs61nltUfUNQleSeU/LvbcxrejhryvLYzqVNLIqX2kXFvAG3CQnqB2pdK0d5iss+AmfujvTr7W45YDlTG3QAHrVc6lNLEqRsY4wOi9a75KjF3Oe9Rqx1Jks7GMLuii46ZrGl1W1ebarE5OBgVSstK1DWJ/IsLWWeT/YBOPqe1a0Hw98SC7j32QChxuPmLwM81NTGNaRWg4UNbs9gsIjDp1rE2crGoP5VpIOOlRCPZFED2GDU69BxxXmSd3c60kkSDnp2pO/9Kbupc8jFIpEg6U4YxUeeByTmng5GKAJAcevNV7mEOrAgEEdKnHA70nDDGf1oA88u9GuoNTmWGMvFnevsPSrlncPD+7lH5101/atJsmi4kjbcp9cdvxrN1KwWRPtkIyG+8B1BrCpFbo6KdToxhYMmQaRVzxWC989nL84Ow/pWzYXKXC5Vga5nudRK8HOQKrvER2rWVAwqN4BnpSKMsDnvS7RV829J9mHekKxR8sGpRDtXOKuLDjtSvHximBnbNzZ7CllcRRnmpZAIwTWLd3Bmk2KeAaBEUiveXIVRlm6D0rqNH06KzjAUfMfvN6ms/S4YlONymZhkjOSorpreLaorqp02tWc1WpfRE6jb3qQYpoFOrc5g+bHBqvKecj/APVVgjj3qvIcgnv3oEQjkmnL3poGKmGDjOKAGIp3ZrxrxSYLPxNfRGRVIkLYzjg8/wBa9uVcCvC/iFo+py+Lb67WxuGt2I2SJGSCAo7it8PVdOV0Z1I8ysFvqFpJDte4jyOME0/yLC4ydkD+4xXK22l6g7kLZXJPoIm/wqSazurVgs8EkRPTehXP516EcXf4kcrodmaWpaKrOGtQA3909Kht9Em80ecyqvoOc1Vj1Ge1kUMxePP3WNX5PEEflgiJ9445NNOhL3paBapFWRM2hy28iy2s7CRDvXnBH0Ira074kavpo+zajbpdFRjLja/4kda5pNeu8hnKlP7uP61fGp2N0F88L83ZlqZU6NT4QUqkNzsrf4oaXKP9KsbiI5/gYN/Or8XiDwz4jlFuZ/KnP3TMNhPsD0rhV03TrmImJVweSUNZlzoc0LF4MOnYdDWf1SUNYjdWFTSZ6JdeGL6OYiFRInY5orgrbxP4l0qEW0F7dJEPuoRkD6UU/a11ocry+g3cl1WayRRHKhZiOijoKz7a202U5EjfRmrPi827u1V3LPI4XJ969Mb4RWwtFL60wuSuWCwgoD6DvU1MRDmu1odkaT5dDjJBptkm5dm765NP0nQdW8YXjixgzHHjc7HaifjXQwfCe4acfaNVtxAPvFVYsR7V6RpGn2mkWEdjYoUt09vmY92PqTWVbFq1omkKLT1PDNZ8G6xY6sunvbl2yB5icpz716roHw00HT7eKXUWfUJwMlAxWMH6DrVjxDLIUVQ52Bxhc8da6S3OLOM/7IrjlWd9DdQKyxW9pE1vY2sNpCP4IUAz9T1NZ658wjJ/OtVV3bs9KpfZyJuOKycmykkaFr+8tQD94VIBjrVaAmJ+enepbi4ji+Zm4+mauL0FYew74/WkGaoyaiwXMMDN/vdKpO+qXTEb/LXsIxijmQJG088NvgzSpGOvzGsq48W6bbg7HknYfwxqTn+lVjorycyNub1JzSroaKeaTkOxRfx1Oz+XBpTrno0r/wBAKpap4w8R2Nusq2dosZIDMFJx+tdCulxD7yAgdKmns4rm1a2dBtIwc96ltjRz0XiHxDdWXnxpat3x5R6fnXQ6ZetcRCZkAMi/vEA4yPSsPSEbS7p9LnyU5MTeo9K0Y4/styY8lY3O5WHY1NxkeueHjex/aLNkJHVCcE1zmmLcWN2UdGXnkHtXdCZfNIPPqcYzUV7p8dwvmAfvF6YqJwvqjelWt7rILW4DoM1eTB9KxkjaLrxV2CfHBNY27nV6F8xAjpUZip6Sjuc05pVPY0AQhcGopmVeTTpZlQZrlfEfiSHToSu9TM33UHWiMXJ2QSkoq7H65qMcEBJmWMdMk1yJ160S1mdJpHlztUoOMn61lXUl/qUgnTTppHByXkjZj7cdAPwr0zQPDdkz2eoX1hA9wsAAi2fID1LFfX2rtjRjTs5HDPEOekTN+HkHnpdXxEnzvtHmPuIx74HrXoS8YrNhlsbIMzGG3EjF9igKOfaopfFWhwHD36ZHYKTVNpsxRt455pT6dqwP+E00InAujj18tv8ACpE8W6NI2FuSf+2Zx/Ki4Gw3PQ1C4596pDxHpLjAulH1BFWYry0n5S4icHphhRdCHgDOT+NSKpzTAVJyrhh7GnqxzTHYk6Z9qwvtUwkcpIwUk8Z4rbdwY2GeSOKy/siIoMsmGJyAozUyb6BYLO8uPP8A9Zj/AICP8K0pvJvV8u9tbe6j9J4w1ZkW1J+OR6kVf39KhTkuo7I53X/APh3VYf8AR7QadcY+WSEnZ+K1xGpfCPWIFDWtxaXKHgYfbj869cfDACoLn/VKue+a0VaS3E6aZwmn/CaxOnqL7U5YrzHzCNAyL/jXNa78NNY0vfNaKt9bA8PCPmx7r1r2KPgdKcGZG3oSpHoapV3fUlwPnCG4utPnIjZo2zhlP9a0F8Ry9JYUPuvGa9r1bw5omu/8hHT083/ntD8j/j61zM/wm0aUE22r3MLE8CaIOB+WK64YprZmMqKe6OEj163ZcurqfTGaK6WX4Syo+BrVsVPQ7GFFbfXH3M/q6OtsPCHh3RLlZ7WyeaZSCslw+7B9hXQb/MBZsZPWmyKCv0qONgGwa8hyb3O5RSHMmDkCnIu1STTl60SEBKVwOd1pQ8TfXNbtqxawi91FY+opujatSyP+hxj0FT1GXoVyPrUwhTOSOajhHFWF6GmBTdcyE470bFc4YA896mKcmmR/fNCCw0xDHAA9KUAbe1TEe1MC84xTAbtzSeWDUu04pMepoAj8mmyRADcD0qbPoaTk9qAM2+sUvIlkUYmj5VqEgFzAN3Dr+hq8RsPQYqvIvky+cv3T94ChgQPCfL+6cqc5pYLnD7G4z61pxhJFzkEEZFVLvTxKu5OGpBYgu7cMu9cYrN5Q1dtrl4W8i4HPam30GBvTlTWco3N6VTowhYsOtLJLs71nxXqRnyy3zdhU6K0z98VmlqdF7K7BoJrwFVlEIPWQjOPoO5/KrOm+HtIs5POSxWe4Jybi5+dj746Cp4Y/LxkZ44qUtM/yhAq9zXRH3VocVSXOyzdX7x27RRMAzcAKoAqpHI6bioAA5z60eSAcu3A5zUT3MQUooz2Bqm29yFoUb9YmLb0BPQcdqzbXR7ae43NCp/CtFozNJmrMERh+bNICKTRbGOBmMKn2xT7PSbeOHcYVwauKjXLgkfIO1WGHRRxigCgdFtWXJjHNR/2Fag5CD8q2ADgCkOScUXCxQXR4AoI3A+xxU0VkIzgSOfqau44po+9RdjIfs+BjcaZ9lX1q4RTaQFZbTmnvFtwM1OKZN2oEMxyKjul+7Uiff5plwfnGRQMI+w9KkPJpkf3qfzzmmhMacgfjSU7OMZpr8AmgClKS0h7496Kfs3HIoouIskZGeKqMdklTxOfusaguAA4NIpFhOQD6Utx92oom+UCpLn7o+lAGNfDKnNaOn/8AHsv0rPuOeMd60rMYhFAzQhHyVOnpUMH3KlU4NAhkgwCahT74qxKPlqsv3hQBY7Uw4Byak7UmAaAGZ9KDxQaTimAuf1pc8UgA9KccYwOKAIWy1NHTaec1IFOetJs7imIZF/o8gU5CZyParUg/i7GoAAQQaljJ27W6YxUgVbu0WZd4HzdjVSMlQYpRkEc1rhe3Y1z2pXZg1eG3UE+ZwcCgZy1xpt9/wmPkxOXgxv34+UD0+tdxbWgRc9BjvSW9uqnJXJPJp1xfQwcE72/ujtSUepUqjasWdqKDtA47mqlxepH8oIdvaqMtxcXRGPlX0FSQ2RJzirsZ3InlnnbngegqWG1YjkVoRWipycVKcDgCkxogS3VF5xR5QcgY4qbaS3INSKAB0oGIAI02jimqCWzSsfahBQIfg4pAOec0En6VJGKQw7UgGTT26UxetADiOKTbT+1NoATvUUx6VN2qGXqKBDYhmQUy4/1oFPh+/UT/AOuJoGOTqeKefpTE96kxTATmo34Xgc1Nx3NQsN70CCOMFaKnQALxRQIpzLscMKrXbHg46nmriyJc2yyRkMrDIIqheHbGOnWkUS2j7nxmrF11A9qoaWQ1x1yQM1fuSS5z+lCAzXGXxir9uuExVMKWmq/CMdeKBl2Efu6kHWmQ/c4pw60CCX/V1WHarT42HmqgoAtD7tFIp+WlpiGnHrTeMcU4j3xSAKe9NAKMjpjFIxOe1B29jmkCu33Y2P4UWYXEpeo61KLWZkyY9o9ScVWluLO34udRtIfZpRmmoyYuZAykHNSIfmB61mT+JPDtvnzdbtuOoTLVVHjrwn5scS6k5ZyBvMZCr7n2qvZSFzo27ucW6465rMEKed58hyx9RzWbfeJtIaC8ube+Fz9kTcyqpwD2GfrT7a+ku4Y5pAsRZFbYoJAOBUqm+oOa6E01/LKzRRAqAccU+CxZiCxJPvXOan46TQdYFrLp0N2pQO7btrKT2/LFW7f4o+H5mAm0+7t/dSGxWvsnYjnOqhtQvUCpwAvbmsiDxp4VuMeXqjRk/wDPWIjFacF/pV0P3Gr2Umeg8wCodOSKUkTdRSbasJaySDMbRyj/AGGBoa2uF5MT4HoKhxkXdEHTuaaeOlSlW7qw/CoiDRYBvJNPAAPOaRRzzTxxxSYBkd6kWox1qUdOlACNntTR14p5PpUY5NADwTRilUc9aU0hjelQSjmrB6VXloENhxuqJ/8AXHmpYOtRyg+Y1AwXAHWpQcioMe9TLyvNPoICeKRACck0pHNPVQKAZnanqAs5I0BGSMnmiszUSbm/lJ5VTtXiigZZ0bNpLPp0mfkO6PP930qbU0It3IA45FSajDtkhvogN0R+YeqnrU16m+zcrzlcj8qBMy/DreZLK3oAK07jmQ81leE4pXkvFVCSjKvA9s1sXUMqSZaNh+FFnYHuVYBmarS/fP0qG1RjKdqnP0qW5ePTreS7vnWCCNSzMx5PsB3JoSbegNouw8JS5JauEf4s2wGLHR1IB+V7iTqPoKyLn4ta1vPk29lGM8AJkj862+rsz9oeqtG7IQqMfwrM1G9tdHtHutRmEMK9urN7AeteTXnxJ8TXcTL/AGg0YPURqFxXJ3Oo3d9ceZc3Eszk9XYnmtI4fXUTqM9nf4o6FGn+j6ddTD1dwuapyfFu0U/u9CyP9qf/AOtXmFvaXLxjZbyOPXFTNpV+R/x7sPTpXQsP5GXtPM9Cf4vYQmPQYP8AgUxP9Kj/AOFw3PbRLMA/7Z/wrz46Tfg/8e7Y9qZ/Zd7v2/Z3z6kU/q77B7RdzvZ/i7qLJ+40uxib+8ctWVdfE/xNOhUXkcIP/PKILXOx6LfSHDRhB/tMKmXw9cE/PNGB7Amrjh5PZCdWK6kd34i1a+JNxqN1JnqDIcVmmRn5Zix9Sc10Efh+BceZKz89MYFW49Js4/8AlgD9ea2WEl1M3iInJYOMijyZVUt5bEd+K7X7PAgG2FAB0+UVDeSoibMqMjpxVrCrqyPb32RWttPI8IXqwzZ+03IUllKn5RyCD7mr2n6xrVppogzbSsi4WRycj6+tR3N/DZeHrJZd2ZpJHyBweRVIa5Y7OGk6f3ailRo8tpjnOpf3TOvNP1O5uJLqfE0khyzg9aotZ3EPLQuPcrxXTWmqWkw2+euR0B4q4skTnAdTn/arZ4em/hZHtprdHF7mUHPH4UqyEEHP5V2ckELj5kUjPoDVdtMs3GTAuexFZvCPoy1iF1RgwatfWxzBdTRD/ZkIrVg8aeI7bb5er3OAf4n3foac+gWxztZ1z/dOf51A3hzHKXPH+0tZPCzLVeLNiH4n+JYeWu4pR/00hBq7F8XdWXiewsZvfaV/ka5JtBuhnEkZx7mqr6Pfqf8AVq30YVm8NLsaKrF9T0SL4vIx/faDF9UnI/pWhB8VNDckT6XdpjrskDCvJzpt+o+a3cj25pn2a4XhoJB/wE1m6HdDVRPZnssfxK8Lsfmiv0P+4D/Wr0fj3wrKcfa7mP8A34a8LMUyjJjbnpwacA4PzAil9XXYftD6Ch1/w7dY8nW7cE9BIdtXoohKN0E0Uy+sbg183PJ82PSn2+o3ds+6C5lQj+45FRLDopVGfSRhlXkxsPwppDDqDXh1v478R2wUR6pOQOMM2a3LD4ta1bDbeR212o/vrgn8RWbw7KVQ9U4xVaX71cfb/FrT5P8Aj60Z1z3ikB/nitXTvGWga5cCC1mktrhvuxXAAz7A9KzdGSHzo3IelRzj5zU8cUqN80Z+uKZKjHkK35VlaxfQqMcY+tTRNx1NRGKVjgRsfwqxHazKvKgf7zAU1FiuhOp5p0rCOFm6YFSJBwMzwc9vNFRanE8FpuOCrHAKnINPlfUV0zEiTcCx7nNFSxnC4AFFRYs1SoyY25V+Kgg5t3gY/NGSvPp2/SrD9CO61g+JdcufD2ntqVlDHI7gI28cL6GrirsTdjg/EOvatoV+bexu5rZZSXcJxk9BWH/wnXiSKQOuqXDEf3zkU1JL3xVc3N5fXWXWTaPl6DGeKjuPDwXpOf8AvmvTp4aThdI45Vo82pp/8LO8TONkd1HFkfeSMA/nXO3+tajqtxvvryW4Yf32zVq18PFp8NNgYz0q7DottDchiWcryM1pHCT6kuvEoWmn3lwgZIW2k9Tx/Op/7CunbnYv410q3EFvBullRcdiaz59cskHEm4k/wAIrp9hTj8TMfazfwoof8I8wjy84/BadbaPBBIr8uwPG4/0qWXxBbiM7InJ96y5tdllQrFGqA8Z70XoQ1QWqy3OvjljWIbnVfYmg3MAP+uj/AiuHiMjglmZj7mnEE9jUfWl0Q/q992dyGjYZV1P41E80SctLGPqwrixuB4z07GmsjHOaPrXkH1bzOwkv7OMZa4jB9jmqsuvWSj5C7n2XFcvtb0qxb6dd3ZAgt5ZMnACIT/KpeKl0LWHXU1JPEjFspBjHQk1Sl1y9kGFZEB7qK2bT4d+Jrwjbprxqf4pSFFbtp8I70lTf6lbQDuEy5rGWIn1ZaoxXQ8+a9upgd88h9s1m3MkhYEM27PUmvav+FX6HbREzancTED+BQKr3fgXw69kIooJYWLj9+Gy1YSr3W5qqduhwuqQXE/hnQwsUjhYGYsFJH3qx1tJ8D91Jz/smvobRIl0nQ7axt23xRqFUuoya0Bct/zzi4/2BWUa8VuV7NnzBJDLHJl0ZQOeRUiM6fMpYHtg19Fapb2eowGG8soJoz1BQA/nWFJ4B8K3kWEt7i3bGMxvn+daRrxJcDxlNQukPE7cdic1bi1u9QYLK3PcV6NcfCbT2BNnrLoccLLHmsuf4Sasozb3lnOD0XcVNaqu+kiXSXVHMxeI36SQL9QatDxDbn78brz25pbz4e+JrMndpUsir/FEQ1Ys2k3tqWFzaXEWOzxkVrHETIdGBv8A9t2LrnzSuf8AZNOXUrJj8txGT2zXJNG3ocYpm1uh5rRYqS3RDw8TuFubcjiaI/8AA6k3xsvEifga4baRxil+YEYzV/W+6I+rLud4FVx2IpTApBJQHHqK4dJZQRtZ1+hqYXlwg+WaQH60fWY9UL2Eu51Uun2sgyYEPqQKoNoVo53BWT6Gsn+2L2MkeeTx3FT2/iGZf9dGr89RxT9rSluhezqLZksvhxsfuZs57MKpvod8gyIg3phxWzHr9owJcNHnuasjVLKQfLcIM9M0/Z0pbMOeqt0cz/Z9/GPmt5P++c4qnceZDJllZGHQkYruYriGQZSVDn0aq9/bxXEe2RVZSKTw0XsxrENboydL8e+I9OiEcGpylV6K/wA3860pPij4paMr9tjye/lCshPD8Tk7JmVfTGaV/DY7XH/jtc7wk77Gvt4hdePvEtySH1WZQf7mBWVNrWpXTEz39xIT13SGrSaADKd87ED0FXo9CtFPO8/8CojhJ9QdeKMUXEnBEr5Hfca7jwJc3Mn21pbiR4kCqqs5Iz16VlrolhgZR/rurpvDthHY2bRwhsSPvOevoKxxVF06d2XRqqcrI66yTfEWPc0Vbs0CQAGivNR23P/Z"
        }
    },
    "marks": {
        "result": {
            "0": {
                "name": "Database Systems Lab",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "3", "7.3", "1.6", "0", "8.5", "10", "10"],
                    ["A:2", "3", "8.1", "1.76", "0", "9", "10", "10"],
                    ["A:3", "3", "9.97", "2.3", "0", "12", "15", "15"],
                    ["A:4", "4", "9.44", "2.15", "0", "12", "16", "16"],
                    ["A:5", "5", "11.81", "2.94", "0", "15", "16", "16"],
                    ["As", "18", "12.66", "2.8", "0", "15", " ", "18"],
                    ["L:1", "5", "9.4", "2.26", "0", "11", "13", "13"],
                    ["L:2", "2.5", "10.03", "2.66", "0", "12", "12", "12"],
                    ["L:3", "5", "2.86", "0.66", "0", "3.5", "5", "5"],
                    ["L:4", "5", "3.44", "0.96", "0", "4.3", "5", "5"],
                    ["L:5", "2.5", "7.73", "1.99", "0", "9.3", "10", "10"],
                    ["L:6", "5", "5.11", "1.21", "0", "7", "9", "9"],
                    ["L:7", "5", "3.9", "0.86", "0", "5", "7", "7"],
                    ["Lab", "30", "19.56", "4.48", "0", "23.13", " ", "30"],
                    ["P:1", "10", "7.84", "1.94", "0", "9.5", "10", "10"],
                    ["Proj", "10", "7.84", "1.94", "0", "9.5", " ", "10"],
                    ["C:1", "2", "6.77", "3.26", "0", "10", "10", "10"],
                    ["CPO", "2", "1.35", "0.65", "0", "2", " ", "2"],
                    ["F:1", "40", "25.74", "7.81", "0", "38", "40", "40"],
                    ["Final", "40", "25.74", "7.81", "0", "38", " ", "40"],
                    ["G.Tot", "100", "67.16", "16.52", "0", "86.57", " ", "100"]
                ]
            },
            "1": {
                "name": "Operating Systems Lab",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "3", "7.3", "1.6", "0", "8.5", "10", "10"],
                    ["A:2", "3", "8.1", "1.76", "0", "9", "10", "10"],
                    ["A:3", "3", "9.97", "2.3", "0", "12", "15", "15"],
                    ["A:4", "4", "9.44", "2.15", "0", "12", "16", "16"],
                    ["A:5", "5", "11.81", "2.94", "0", "15", "16", "16"],
                    ["As", "18", "12.66", "2.8", "0", "15", " ", "18"],
                    ["L:1", "5", "9.4", "2.26", "0", "11", "13", "13"],
                    ["L:2", "2.5", "10.03", "2.66", "0", "12", "12", "12"],
                    ["L:3", "5", "2.86", "0.66", "0", "3.5", "5", "5"],
                    ["L:4", "5", "3.44", "0.96", "0", "4.3", "5", "5"],
                    ["L:5", "2.5", "7.73", "1.99", "0", "9.3", "10", "10"],
                    ["L:6", "5", "5.11", "1.21", "0", "7", "9", "9"],
                    ["L:7", "5", "3.9", "0.86", "0", "5", "7", "7"],
                    ["Lab", "30", "19.56", "4.48", "0", "23.13", " ", "30"],
                    ["P:1", "10", "7.84", "1.94", "0", "9.5", "10", "10"],
                    ["Proj", "10", "7.84", "1.94", "0", "9.5", " ", "10"],
                    ["C:1", "2", "6.77", "3.26", "0", "10", "10", "10"],
                    ["CPO", "2", "1.35", "0.65", "0", "2", " ", "2"],
                    ["F:1", "40", "25.74", "7.81", "0", "38", "40", "40"],
                    ["Final", "40", "25.74", "7.81", "0", "38", " ", "40"],
                    ["G.Tot", "100", "67.16", "16.52", "0", "86.57", " ", "100"]
                ]
            },
            "2": {
                "name": "Database Systems",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "2.5", "9.5", "1.14", "5", "10", "10", "10"],
                    ["A:2", "2.5", "7.15", "2.82", "0", "10", "10", "10"],
                    ["A:3", "2.5", "8.8", "1.35", "5", "10", "10", "10"],
                    ["A:4", "2.5", "7", "3.68", "0", "10", "10", "10"],
                    ["As", "10", "8.03", "1.81", "3.25", "9.75", " ", "10"],
                    ["Q:1", "2.5", "5.38", "2.55", "0", "10", "10", "10"],
                    ["Q:2", "2.5", "7.12", "2.86", "0", "10", "10", "10"],
                    ["Q:3", "2.5", "8.19", "1.79", "4", "10", "10", "10"],
                    ["Q:4", "2.5", "6.5", "2.47", "0", "10", "10", "10"],
                    ["Q:5", "2.5", "6.44", "2.63", "0", "9", "10", "10"],
                    ["Qz", "10", "7.57", "1.03", "5.5", "9", " ", "10"],
                    ["S:I", "15", "28.27", "6.86", "16", "38", "40", "40"],
                    ["S-I", "15", "10.6", "2.57", "6", "14.25", " ", "15"],
                    ["S:II", "15", "30.17", "7.65", "15", "45", "45", "45"],
                    ["S-II", "15", "10.06", "2.55", "5", "15", " ", "15"],
                    ["P:1", "10", "8.33", "1.64", "5", "10", "10", "10"],
                    ["Proj", "10", "8.33", "1.64", "5", "10", " ", "10"],
                    ["F:1", "40", "76.19", "16.71", "40", "100", "115", "115"],
                    ["Final", "40", "26.5", "5.81", "13.91", "34.78", " ", "40"],
                    ["G.Tot", "100", "71.09", "12.32", "43.98", "90.12", " ", "100"]
                ]
            },
            "3": {
                "name": "Operating Systems",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "2.5", "9.5", "1.14", "5", "10", "10", "10"],
                    ["A:2", "2.5", "7.15", "2.82", "0", "10", "10", "10"],
                    ["A:3", "2.5", "8.8", "1.35", "5", "10", "10", "10"],
                    ["A:4", "2.5", "7", "3.68", "0", "10", "10", "10"],
                    ["As", "10", "8.03", "1.81", "3.25", "9.75", " ", "10"],
                    ["Q:1", "2.5", "5.38", "2.55", "0", "10", "10", "10"],
                    ["Q:2", "2.5", "7.12", "2.86", "0", "10", "10", "10"],
                    ["Q:3", "2.5", "8.19", "1.79", "4", "10", "10", "10"],
                    ["Q:4", "2.5", "6.5", "2.47", "0", "10", "10", "10"],
                    ["Q:5", "2.5", "6.44", "2.63", "0", "9", "10", "10"],
                    ["Qz", "10", "7.57", "1.03", "5.5", "9", " ", "10"],
                    ["S:I", "15", "28.27", "6.86", "16", "38", "40", "40"],
                    ["S-I", "15", "10.6", "2.57", "6", "14.25", " ", "15"],
                    ["S:II", "15", "30.17", "7.65", "15", "45", "45", "45"],
                    ["S-II", "15", "10.06", "2.55", "5", "15", " ", "15"],
                    ["P:1", "10", "8.33", "1.64", "5", "10", "10", "10"],
                    ["Proj", "10", "8.33", "1.64", "5", "10", " ", "10"],
                    ["F:1", "40", "76.19", "16.71", "40", "100", "115", "115"],
                    ["Final", "40", "26.5", "5.81", "13.91", "34.78", " ", "40"],
                    ["G.Tot", "100", "71.09", "12.32", "43.98", "90.12", " ", "100"]
                ]
            },
            "4": {
                "name": "Design & Analysis of Algorithms",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "2.5", "9.5", "1.14", "5", "10", "10", "10"],
                    ["A:2", "2.5", "7.15", "2.82", "0", "10", "10", "10"],
                    ["A:3", "2.5", "8.8", "1.35", "5", "10", "10", "10"],
                    ["A:4", "2.5", "7", "3.68", "0", "10", "10", "10"],
                    ["As", "10", "8.03", "1.81", "3.25", "9.75", " ", "10"],
                    ["Q:1", "2.5", "5.38", "2.55", "0", "10", "10", "10"],
                    ["Q:2", "2.5", "7.12", "2.86", "0", "10", "10", "10"],
                    ["Q:3", "2.5", "8.19", "1.79", "4", "10", "10", "10"],
                    ["Q:4", "2.5", "6.5", "2.47", "0", "10", "10", "10"],
                    ["Q:5", "2.5", "6.44", "2.63", "0", "9", "10", "10"],
                    ["Qz", "10", "7.57", "1.03", "5.5", "9", " ", "10"],
                    ["S:I", "15", "28.27", "6.86", "16", "38", "40", "40"],
                    ["S-I", "15", "10.6", "2.57", "6", "14.25", " ", "15"],
                    ["S:II", "15", "30.17", "7.65", "15", "45", "45", "45"],
                    ["S-II", "15", "10.06", "2.55", "5", "15", " ", "15"],
                    ["P:1", "10", "8.33", "1.64", "5", "10", "10", "10"],
                    ["Proj", "10", "8.33", "1.64", "5", "10", " ", "10"],
                    ["F:1", "40", "76.19", "16.71", "40", "100", "115", "115"],
                    ["Final", "40", "26.5", "5.81", "13.91", "34.78", " ", "40"],
                    ["G.Tot", "100", "71.09", "12.32", "43.98", "90.12", " ", "100"]
                ]
            },
            "5": {
                "name": "Fundamentals of Accounting",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "2.5", "9.5", "1.14", "5", "10", "10", "10"],
                    ["A:2", "2.5", "7.15", "2.82", "0", "10", "10", "10"],
                    ["A:3", "2.5", "8.8", "1.35", "5", "10", "10", "10"],
                    ["A:4", "2.5", "7", "3.68", "0", "10", "10", "10"],
                    ["As", "10", "8.03", "1.81", "3.25", "9.75", " ", "10"],
                    ["Q:1", "2.5", "5.38", "2.55", "0", "10", "10", "10"],
                    ["Q:2", "2.5", "7.12", "2.86", "0", "10", "10", "10"],
                    ["Q:3", "2.5", "8.19", "1.79", "4", "10", "10", "10"],
                    ["Q:4", "2.5", "6.5", "2.47", "0", "10", "10", "10"],
                    ["Q:5", "2.5", "6.44", "2.63", "0", "9", "10", "10"],
                    ["Qz", "10", "7.57", "1.03", "5.5", "9", " ", "10"],
                    ["S:I", "15", "28.27", "6.86", "16", "38", "40", "40"],
                    ["S-I", "15", "10.6", "2.57", "6", "14.25", " ", "15"],
                    ["S:II", "15", "30.17", "7.65", "15", "45", "45", "45"],
                    ["S-II", "15", "10.06", "2.55", "5", "15", " ", "15"],
                    ["P:1", "10", "8.33", "1.64", "5", "10", "10", "10"],
                    ["Proj", "10", "8.33", "1.64", "5", "10", " ", "10"],
                    ["F:1", "40", "76.19", "16.71", "40", "100", "115", "115"],
                    ["Final", "40", "26.5", "5.81", "13.91", "34.78", " ", "40"],
                    ["G.Tot", "100", "71.09", "12.32", "43.98", "90.12", " ", "100"]
                ]
            },
            "6": {
                "name": "Linear Algebra",
                "marks": [
                    [" ", "W:", "Avg:", "StdDev:", "Min:", "Max:", "T:", "Yours"],
                    ["A:1", "2.5", "9.5", "1.14", "5", "10", "10", "10"],
                    ["A:2", "2.5", "7.15", "2.82", "0", "10", "10", "10"],
                    ["A:3", "2.5", "8.8", "1.35", "5", "10", "10", "10"],
                    ["A:4", "2.5", "7", "3.68", "0", "10", "10", "10"],
                    ["As", "10", "8.03", "1.81", "3.25", "9.75", " ", "10"],
                    ["Q:1", "2.5", "5.38", "2.55", "0", "10", "10", "10"],
                    ["Q:2", "2.5", "7.12", "2.86", "0", "10", "10", "10"],
                    ["Q:3", "2.5", "8.19", "1.79", "4", "10", "10", "10"],
                    ["Q:4", "2.5", "6.5", "2.47", "0", "10", "10", "10"],
                    ["Q:5", "2.5", "6.44", "2.63", "0", "9", "10", "10"],
                    ["Qz", "10", "7.57", "1.03", "5.5", "9", " ", "10"],
                    ["S:I", "15", "28.27", "6.86", "16", "38", "40", "40"],
                    ["S-I", "15", "10.6", "2.57", "6", "14.25", " ", "15"],
                    ["S:II", "15", "30.17", "7.65", "15", "45", "45", "45"],
                    ["S-II", "15", "10.06", "2.55", "5", "15", " ", "15"],
                    ["P:1", "10", "8.33", "1.64", "5", "10", "10", "10"],
                    ["Proj", "10", "8.33", "1.64", "5", "10", " ", "10"],
                    ["F:1", "40", "76.19", "16.71", "40", "100", "115", "115"],
                    ["Final", "40", "26.5", "5.81", "13.91", "34.78", " ", "40"],
                    ["G.Tot", "100", "71.09", "12.32", "43.98", "90.12", " ", "100"]
                ]
            }
        }
    },
    "courses": {
        "result": {
            "cgpa": "4.0",
            "CreditEarned": "50",
            "CreditLimit": "17",
            "CurrentCredit": "17",
            "warning": "0",
            "SelectedCourse": "7",
            "courses": [{
                "Sr.#": "1",
                "Code": "CL203",
                "Name": "Database Systems Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "2",
                "Code": "CL205",
                "Name": "Operating Systems Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "3",
                "Code": "CS203",
                "Name": "Database Systems",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "4",
                "Code": "CS205",
                "Name": "Operating Systems",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "5",
                "Code": "CS302",
                "Name": "Design & Analysis of Algorithms",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "6",
                "Code": "MT104",
                "Name": "Linear Algebra",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "7",
                "Code": "MT206",
                "Name": "Probability & Statistics",
                "Cr.Hrs": "4.0",
                "Relation": "Core",
                "Comments": "Register! 5-New Offered Course <New> (Recommended)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "8",
                "Code": "SS108",
                "Name": "Technical and Business Writing",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 5-New Offered Course <New> (Recommended)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "9",
                "Code": "CS301",
                "Name": "Theory of Automata",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 5-New Offered Course <New> (Recommended)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "10",
                "Code": "MG108",
                "Name": "Fundamentals of Accounting",
                "Cr.Hrs": "3.0",
                "Relation": "Elective",
                "Comments": "",
                "Status": "Registered",
                "Section": "CS14A",
                " ": ""
            }, {
                "Sr.#": "11",
                "Code": "MT207",
                "Name": "Numerical Methods",
                "Cr.Hrs": "3.0",
                "Relation": "Elective",
                "Comments": "Register! 6-New Offered Course <New> (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "12",
                "Code": "CS406",
                "Name": "Web Programming",
                "Cr.Hrs": "3.0",
                "Relation": "Elective",
                "Comments": "Register! 6-New Offered Course <New> (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "13",
                "Code": "CL103",
                "Name": "Computer Programming Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "14",
                "Code": "MT115",
                "Name": "Calculus - II",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "15",
                "Code": "SS113",
                "Name": "Pakistan Studies",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "16",
                "Code": "SS122",
                "Name": "English Composition",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "17",
                "Code": "SS127",
                "Name": "Sociology",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "18",
                "Code": "EL213",
                "Name": "Comp. Organization & Assembly Lang. Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "19",
                "Code": "EE182",
                "Name": "Basic Electronics",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "20",
                "Code": "EE213",
                "Name": "Comp. Organization & Assembly Lang.",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Register! 8-Improvement Course (Can take)",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "21",
                "Code": "EE227",
                "Name": "Digital Logic Design",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "22",
                "Code": "CS449",
                "Name": "Professional Issues in IT",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "CS303-Software Engineering,Not Clear",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "23",
                "Code": "CS491",
                "Name": "Project - I",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Project-I, Minimum Credit/CGPA Requirement Not Fulfilled",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "24",
                "Code": "CS492",
                "Name": "Project - II",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "CS491-Project - I,Not Clear",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "25",
                "Code": "EL227",
                "Name": "Digital Logic Design - Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "26",
                "Code": "MT101",
                "Name": "Calculus - I",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "27",
                "Code": "CL101",
                "Name": "Introduction to Computing Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "28",
                "Code": "CL307",
                "Name": "Computer Networks Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "Advance Course",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "29",
                "Code": "CL309",
                "Name": "Object Oriented Analysis & Design Lab",
                "Cr.Hrs": "1.0",
                "Relation": "Core",
                "Comments": "Advance Course",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "30",
                "Code": "CS101",
                "Name": "Introduction to Computing",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "31",
                "Code": "CS103",
                "Name": "Computer Programming",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "32",
                "Code": "CS201",
                "Name": "Data Structures",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "It is Pre-Req of already Passed Course!",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "33",
                "Code": "CS303",
                "Name": "Software Engineering",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "CS309-Object Oriented Analysis & Design,Not Clear",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "34",
                "Code": "CS307",
                "Name": "Computer Networks",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Advance Course",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "35",
                "Code": "CS309",
                "Name": "Object Oriented Analysis & Design",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Advance Course",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "36",
                "Code": "CS401",
                "Name": "Artificial Intelligence",
                "Cr.Hrs": "3.0",
                "Relation": "Core",
                "Comments": "Advance Course",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "37",
                "Code": "CS310",
                "Name": "Management Info. Systems",
                "Cr.Hrs": "3.0",
                "Relation": "Not Degree Part",
                "Comments": "Not Degree Part",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "38",
                "Code": "CS411",
                "Name": "Network Security",
                "Cr.Hrs": "3.0",
                "Relation": "Not Degree Part",
                "Comments": "Not Degree Part",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "39",
                "Code": "CS421",
                "Name": "Computer Modeling & Simulation",
                "Cr.Hrs": "3.0",
                "Relation": "Not Degree Part",
                "Comments": "Not Degree Part",
                "Status": "",
                "Section": "",
                " ": ""
            }, {
                "Sr.#": "40",
                "Code": "CS433",
                "Name": "Advanced Programming",
                "Cr.Hrs": "3.0",
                "Relation": "Not Degree Part",
                "Comments": "Not Degree Part",
                "Status": "",
                "Section": "",
                " ": ""
            }]
        }
    },
    "transcript": {
        "result": [{
            "semester": 1,
            "semester_season": "Fall 2014",
            "attempted": "17",
            "earned": "17",
            "cgpa": "4.0",
            "sgpa": "4.0",
            "grade": [{
                "Code": "EE182",
                "Course Name": "Basic Electronics",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "MT101",
                "Course Name": "Calculus - I",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SS101",
                "Course Name": "English Language",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SL101",
                "Course Name": "English Language Lab",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS101",
                "Course Name": "Introduction to Computing",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CL101",
                "Course Name": "Introduction to Computing Lab",
                "CrdHrs": "1.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SS127",
                "Course Name": "Sociology",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }]
        }, {
            "semester": 2,
            "semester_season": "Spring 2015",
            "attempted": "34",
            "earned": "34",
            "cgpa": "4.0",
            "sgpa": "4.0",
            "grade": [{
                "Code": "MT115",
                "Course Name": "Calculus - II",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS103",
                "Course Name": "Computer Programming",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CL103",
                "Course Name": "Computer Programming Lab",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "EE227",
                "Course Name": "Digital Logic Design",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "EL227",
                "Course Name": "Digital Logic Design - Lab",
                "CrdHrs": "1.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SS122",
                "Course Name": "English Composition",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SS113",
                "Course Name": "Pakistan Studies",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }]
        }, {
            "semester": 3,
            "semester_season": "Fall 2015",
            "attempted": "50",
            "earned": "50",
            "cgpa": "4.0",
            "sgpa": "4.0",
            "grade": [{
                "Code": "EE213",
                "Course Name": "Comp. Organization & Assembly Lang.",
                "CrdHrs": "3.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "EL213",
                "Course Name": "Comp. Organization & Assembly Lang. Lab",
                "CrdHrs": "1.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS201",
                "Course Name": "Data Structures",
                "CrdHrs": "3.0",
                "Grade": "A+",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS211",
                "Course Name": "Discrete Structures",
                "CrdHrs": "3.0",
                "Grade": "B+",
                "Pnts": "3.33",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "MG223",
                "Course Name": "Fundamentals of Management",
                "CrdHrs": "3.0",
                "Grade": "B",
                "Pnts": "3.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "SS111",
                "Course Name": "Islamic & Religious Studies",
                "CrdHrs": "4.0",
                "Grade": "A",
                "Pnts": "4.0",
                "Type": "Core",
                "Rmks": ""
            }]
        }, {
            "semester": 4,
            "semester_season": "Spring 2016",
            "attempted": "67",
            "earned": "50",
            "cgpa": "3.39",
            "sgpa": "0.00",
            "grade": [{
                "Code": "CS203",
                "Course Name": "Database Systems",
                "CrdHrs": "3.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CL203",
                "Course Name": "Database Systems Lab",
                "CrdHrs": "1.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS302",
                "Course Name": "Design & Analysis of Algorithms",
                "CrdHrs": "3.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "MG108",
                "Course Name": "Fundamentals of Accounting",
                "CrdHrs": "3.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Elective",
                "Rmks": ""
            }, {
                "Code": "MT104",
                "Course Name": "Linear Algebra",
                "CrdHrs": "3.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CS205",
                "Course Name": "Operating Systems",
                "CrdHrs": "3.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }, {
                "Code": "CL205",
                "Course Name": "Operating Systems Lab",
                "CrdHrs": "1.0",
                "Grade": "I",
                "Pnts": "0.0",
                "Type": "Core",
                "Rmks": ""
            }]
        }]
    },
    "attendence": {
        "result": [{
            "title": "Database Systems Lab",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["A"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["A"],
                ["A"]
            ],
            "percentage": ["81"],
            "presentHour": ["12"],
            "absentHour": ["3"]
        }, {
            "title": "Operating Systems Lab",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["A"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["94"],
            "presentHour": ["14"],
            "absentHour": ["1"]
        }, {
            "title": "Database Systems",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["A"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["97"],
            "presentHour": ["46.5"],
            "absentHour": ["1.5"]
        }, {
            "title": "Operating Systems",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["A"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["97"],
            "presentHour": ["43.5"],
            "absentHour": ["1.5"]
        }, {
            "title": "Design & Analysis of Algorithms",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["100"],
            "presentHour": ["48"],
            "absentHour": ["0"]
        }, {
            "title": "Fundamentals of Accounting",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["100"],
            "presentHour": ["46.5"],
            "absentHour": ["0"]
        }, {
            "title": "Linear Algebra",
            "attendence": [
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"],
                ["-"]
            ],
            "percentage": ["100"],
            "presentHour": ["48"],
            "absentHour": ["0"]
        }]
    },
    "challan": {
        "result": [{
            "S.No": "1",
            "ChallanNo": "00010000000",
            "Amount": "3000.00",
            "GeneratedOn": "1-Jan-99",
            "DueDate": "1-Feb-99",
            "Status": "Paid",
            "Print": "Print",
            "Detail": "Detail"
        }, {
            "S.No": "2",
            "ChallanNo": "00001100000",
            "Amount": "4000.00",
            "GeneratedOn": "1-Aug-99",
            "DueDate": "1-Aug-99",
            "Status": "Paid",
            "Print": "Print",
            "Detail": "Detail"
        }, {
            "S.No": "3",
            "ChallanNo": "00001100000",
            "Amount": "5000.00",
            "GeneratedOn": "1-Jan-99",
            "DueDate": "1-Jan-99",
            "Status": "Paid",
            "Print": "Print",
            "Detail": "Detail"
        }]
    }
};

module.exports = demo_data;