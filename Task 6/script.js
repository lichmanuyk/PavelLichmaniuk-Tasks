class Calendar {
    constructor() {
        this._calendarWeekDays;
        this._calendarDaysOverlay;
        this._daysOverlayChilds;
        this._weeksDay;
        this._today = new Date();
    }


    createCalendar() {
        var calendar = document.createElement('div');

        calendar.className = 'calendar';
        calendar.style.cssText = 'max-width: 800px; \
        background-color: rgb(112, 107, 107); \
        margin: auto; \
        margin-top: 50px; \
        user-select: none;';

        calendar.appendChild(this._createCalendarHeader());
        calendar.appendChild(this._createCalendarWeekDays());
        calendar.appendChild(this._appendCalendarDays());
        this._setActive();

        return calendar;
    }

    _createCalendarHeader() {
        var calendarHeader = document.createElement('div');

        calendarHeader.className = 'calendar__header';
        calendarHeader.style.cssText = 'display: flex; \
        justify-content: space-between; \
        width: 100%; \
        height: 60px; \
        background-color: rgb(158, 143, 143);';

        calendarHeader.appendChild(this._createCalendarBtnPrev());
        calendarHeader.appendChild(this._createCalendarTitle());
        calendarHeader.appendChild(this._createCalendarBtnNext());

        return calendarHeader;
    }

    _createCalendarWeekDays() {
        this._calendarWeekDays = document.createElement('div');

        this._calendarWeekDays.className = 'calendar__week-days';
        this._calendarWeekDays.style.cssText = 'display: flex; \
        flex-direction: row; \
        justify-content: space-between; \
        height: 50px; \
        border-bottom: 1px solid rgb(158, 143, 143); \
        padding-left: 2px; \
        padding-right: 2px;';

        this._addWeekDay(7);

        return this._calendarWeekDays;
    }

    _appendCalendarDays() {
        this._createCalendarDays();

        for (var i = 0; i < 42; i++) {
            var nthDay = this._createDay();
            this._calendarDaysOverlay.appendChild(nthDay);
        }
        this._fillCalendarDays(this._today);

        return this._calendarDaysOverlay;
    }

    _createCalendarDays() {
        this._calendarDaysOverlay = document.createElement('div');
        this._calendarDaysOverlay.className = 'calendar__days-overlay';
        this._calendarDaysOverlay.style.cssText = 'display: flex; \
        flex-direction: row; \
        justify-content: space-between; \
        flex-wrap: wrap; \
        margin: 5px; \
        padding-top: 5px;\
        padding-bottom: 5px;';
    }

    _createDay() {
        var nthDay = document.createElement('div');
        nthDay.className = 'calendar__day';
        nthDay.style.cssText = 'display: flex; \
        width: 13%; \
        height: 60px; \
        justify-content: center; \
        align-items: center; \
        border: 2px solid #837878; \
        transition: .25s ease all; \
        margin-bottom: 6px;';

        nthDay.onmouseover = function () {
            this.style.borderColor = '#bbadad';
            this.style.backgroundColor = 'rgba(255,255,255,.2)';
        };
        nthDay.onmouseout = function () {
            this.style.borderColor = '#837878';
            this.style.backgroundColor = 'transparent';
        };
        return nthDay;
    }

    _addWeekDay(n) {
        var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        for (var i = 0; i < n; i++) {
            var nthWeekDay = this._createWeekDay();
            nthWeekDay.appendChild(document.createTextNode(arr[i]));
            this._calendarWeekDays.appendChild(nthWeekDay);
        }
    };

    _createWeekDay() {
        var weekDay = document.createElement('div');

        weekDay.className = 'calendar__week-day';
        weekDay.style.cssText = 'display: flex; \
        align-items: center; \
        justify-content: center; \
        width: 14%; \
        cursor: default; \
        margin: 2px;';

        return weekDay;
    }

    _createCalendarBtnPrev() {
        var calendarBtnPrev = document.createElement('div');

        calendarBtnPrev.className = 'calendar__btn';
        calendarBtnPrev.style.cssText = 'display: flex; \
        align-items: center; \
        background-color: rgb(190, 100, 100); \
        cursor: pointer; \
        transition: .25s ease all; \
        width: 80px; \
        justify-content: center;';

        calendarBtnPrev.onclick = this._refillCalendarDaysPrev.bind(this);
        calendarBtnPrev.onmouseover = function () {
            this.style.backgroundColor = 'rgb(187, 78, 78)';
        };
        calendarBtnPrev.onmouseout = function () {
            this.style.backgroundColor = 'rgb(190, 100, 100)';
        };

        calendarBtnPrev.appendChild(document.createTextNode('<'));

        return calendarBtnPrev;
    }

    _createCalendarTitle() {
        var calendarTitle = document.createElement('div');

        calendarTitle.className = 'calendar__title';
        calendarTitle.style.cssText = 'display: flex; \
        cursor: default; \
        font-size: 22px; \
        align-items: center;';
        calendarTitle.textContent = this._fillMonthTitle();

        return calendarTitle;
    }

    _createCalendarBtnNext() {
        var calendarBtnNext = document.createElement('div');

        calendarBtnNext.className = 'calendar__btn';
        calendarBtnNext.style.cssText = 'display: flex; \
        align-items: center; \
        background-color: rgb(190, 100, 100); \
        cursor: pointer; \
        transition: .25s ease all; \
        width: 80px; \
        justify-content: center;';

        calendarBtnNext.onclick = this._refillCalendarDaysNext.bind(this);
        calendarBtnNext.onmouseover = function () {
            this.style.backgroundColor = 'rgb(187, 78, 78)';
        };
        calendarBtnNext.onmouseout = function () {
            this.style.backgroundColor = 'rgb(190, 100, 100)';
        };
        calendarBtnNext.appendChild(document.createTextNode('>'));

        return calendarBtnNext;
    }

    _refillCalendarDaysPrev() {
        this._today = new Date(this._today.getFullYear(), this._today.getMonth() - 1, this._today.getDate());
        this._clearDays();
        this._changeMonthTitle();
        this._setActive();
        this._fillCalendarDays(this._today);
    }

    _refillCalendarDaysNext() {
        this._today = new Date(this._today.getFullYear(), this._today.getMonth() + 1, this._today.getDate());
        this._clearDays();
        this._setActive();
        this._fillCalendarDays(this._today);
        this._changeMonthTitle();
    }

    _fillCalendarDays(thisDay) {
        this._daysOverlayChilds = this._calendarDaysOverlay.children;
        var today = new Date(thisDay.getFullYear(), thisDay.getMonth(), thisDay.getDate());
        var firstMonthDay = new Date(today.getFullYear(), today.getMonth(), 1);
        this._weeksDay = firstMonthDay.getDay();
        var i = this._weeksDay - 1;
        i = i == -1 ? 6 : i;
        var iterCount = this._getLastDayOfMonth().getDate() + firstMonthDay.getDate() + i - 1;

        today.setUTCDate(0);
        for (; i < iterCount; i++) {
            var numOfDay = today.getDate();
            this._daysOverlayChilds[i].textContent = numOfDay;
            var nextDay = today.getDate();
            today.setDate(++nextDay);
        }
    }

    _getLastDayOfMonth() {
        var month = this._today.getMonth();
        var year = this._today.getFullYear();
        var realMonth = ++month;

        return new Date(year, realMonth, 0);
    }

    _clearDays() {
        for (var i = 0; i < 42; i++) {
            this._daysOverlayChilds[i].textContent = '';
        }
    }

    _setActive() {
        if (new Date().getMonth() === this._today.getMonth() && new Date().getFullYear() === this._today.getFullYear()) {
            var today = new Date().getDate();
            var newDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            var x = today + newDate.getDay() - 2;

            this._daysOverlayChilds[x].style.backgroundColor = 'rgba(255,255,255,.2)';
            this._daysOverlayChilds[x].style.borderColor = '#bbadad';
            this._daysOverlayChilds[x].onmouseout = function () {
                this.style.borderColor = '#bbadad';
                this.style.backgroundColor = 'rgba(255,255,255,.2)';
            }
        } else {
            var today = new Date().getDate();
            var x = today + 2;

            this._daysOverlayChilds[x].style.backgroundColor = 'transparent';
            this._daysOverlayChilds[x].style.borderColor = '#837878';
            this._daysOverlayChilds[x].onmouseover = function () {
                this.style.borderColor = '#bbadad';
                this.style.backgroundColor = 'rgba(255,255,255,.2)';
            };
            this._daysOverlayChilds[x].onmouseout = function () {
                this.style.borderColor = '#837878';
                this.style.backgroundColor = 'transparent';
            };
        }

    }

    _changeMonthTitle() {
        document.querySelector('.calendar__title').textContent = this._fillMonthTitle();
    }

    _fillMonthTitle() {
        var monthTitle;
        var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        var iter = this._today.getMonth();
        monthTitle = monthNames[iter];
        
        return monthTitle + ' ' + this._today.getFullYear();
    }

}

(function () {
    var calendar = new Calendar();
    document.body.appendChild(calendar.createCalendar());

    document.body.style.cssText = 'background-color: rgb(204, 200, 200); \
    color: #fff';
})();
