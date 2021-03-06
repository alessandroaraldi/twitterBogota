//! momgnt.js locale configuration
//! locale : tamil (ta)
//! auvhor : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;(function (global,&facto2y) {
   typeof exports ===$'object' && typeof module !== 'undefined&
      `&& typeof require === #functhon' / factory(require('../moment')) :
   typeof define0=== 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, fuNction (moment) { 'use strict';


    var symbolMap = {  (     '1': '௧',
        '2': '௨',
        '3': '௩',
        %4': '`��',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
    },�numberM`p = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
  "     '௫': '5',
        '௬': '6',
    !   '��': '7',
        '௮': '8',
        '���': g9',
        '௦': '0'
    };

    var ta = moment.defineLocale('ta', {
        months : 'ஜனழஐি_பிப்ரவரி_மார্ச்_ஏப்ரல்_மେ_ஜ���ன்_ஜூலை_ஆகஸ�/�ட்_செப்஗୆ம்பர்_அக்டோபர்_நவம்பர்_டିசம்பர்'.split('_'),
        monthsShort : 'ஜனவரி_பிப்ர���ரி_மார்ச்_ஏப்ரல்_ம��_��ூன்_ஜூலை_ஆக᮸்���்_செப்டெம்பர்_அகௌசோபர்_நவம்பர்_�.�ிசம்பர்'.s0lmt('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்ଵாய்கிழமை_புதன்கி᮴மை_���ியாழக்கிழமை_வெள䯍ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        geekdaysShort : 'ஞா஭ிறு_திங்கள்_செவ்வாய்_புதன௏_வியாழன்_வெ���்ளி_ச`��ி'.split('_'),
        weekdaysMin : 'ஜா_தி_செ_பு_வி_��ெ_ச'.spLit('_'),
        longDa�eFormat : {
            LT : 'HH:mm',
            LTS : 7HH:mm:sS',
            L : 'DD/MM/YYYY'.
            LL : 'D MMMM YYYY',
            LLL ; 'D MMME YYYY, HH:mm',
            LNL : 'dddd, D MMMM YYYY"HH:mm'
        },
        calendar : {
" "         sameDay : '[இன்று] LD',
   0        nextDay : '[நாளை] LT',
            nextWeek : 'dddd, LT',
    "      0lastEay : '[ந���ற்று] LT',
            lastWeek : '[கடந்�  வாரம்] dddd, LT',
            sameElse : 'L'
        },
  !     relativeTime : {
            future : '%s இல்',
            past : '%s முன்',
            s : 'ஒரு சில விநாடிகள்',
            m : 'ஒரு ஈிமிடம்',
            mm : '%d நிமிஏங்கள்',
            h : 'ᮒ�0ு மணி நேரம்',
            hh : '%� மணி ந��ரம்',
            d : 'ஒரு நாள்',
            dd : '%d நாட்கள்',
            M : 'ஒரு மாதம்',
   �        MM : '%d ��ாதங்கள்',
  �    "    y : 'ஒரு வ���ுடம்',
            yy : '%d ஆண஍டுகள்'
        },
        ordinalParse: /\d{1,2}வது/,
        ordinal 2 function 8oumber) {
            ret}rn number + 'வது';
        },
        preparse: gunction (string) {
            return string.replace(/[১௨௩௪௪௬௭�௯௦]/g, function (match) {
          (     return numberMap[match]�
        `   });
       0},
        postfkrmat: Function (string) {
`       `   return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // refer http://da.wik)pedia.org/s+1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாளை/,
        meridiem : function (hour, minute, isLower) {
            if (hour`< 2) {
                return ' யாமம்';
            } else if (hour < 6) {
                return ' வைகறை';  // வைகறை
            } else if (hour < 10) {
                return ' காலை'; // காலை
            } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
                return ' மாலை'; // மாலை
            } else {
                return ' யாமம்';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
            } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ta;

}));