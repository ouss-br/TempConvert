const D={
     temperature:{
        n:'Temperature',
        g:'°',
        u:[['c',
        'Celsius',
        '°C'],
        ['f',
        'Fahrenheit',
        '°F'],
        ['k',
        'Kelvin',
        'K']],
        cv:(v, a, b)=>{
            let c=a==='c'?v:a==='f'?(v-32)*5/9:v-273.15;
            return b==='c'?c:b==='f'?c*9/5+32:c+273.15
        }
    }
    ,
     length:{
        n:'Length',
        g:'↔',
        u:[['mm',
        'Millimeter',
        'mm',
        .001],
        ['cm',
        'Centimeter',
        'cm',
        .01],
        ['m',
        'Meter',
        'm',
        1],
        ['km',
        'Kilometer',
        'km',
        1000],
        ['in',
        'Inch',
        'in',
        .0254],
        ['ft',
        'Foot',
        'ft',
        .3048],
        ['yd',
        'Yard',
        'yd',
        .9144],
        ['mi',
        'Mile',
        'mi',
        1609.344],
        ['nmi',
        'Nautical mile',
        'nmi',
        1852]]
    }
    ,
     weight:{
        n:'Weight',
        g:'⌁',
        u:[['mg',
        'Milligram',
        'mg',
        .000001],
        ['g',
        'Gram',
        'g',
        .001],
        ['kg',
        'Kilogram',
        'kg',
        1],
        ['t',
        'Metric ton',
        't',
        1000],
        ['oz',
        'Ounce',
        'oz',
        .028349523125],
        ['lb',
        'Pound',
        'lb',
        .45359237],
        ['st',
        'Stone',
        'st',
        6.35029318]]
    }
    ,
     volume:{
        n:'Volume',
        g:'◒',
        u:[['ml',
        'Milliliter',
        'mL',
        .001],
        ['l',
        'Liter',
        'L',
        1],
        ['m3',
        'Cubic meter',
        'm³',
        1000],
        ['tsp',
        'US teaspoon',
        'tsp',
        .0049289216],
        ['tbsp',
        'US tablespoon',
        'tbsp',
        .0147867648],
        ['floz',
        'US fluid ounce',
        'fl oz',
        .0295735296],
        ['cup',
        'US cup',
        'cup',
        .2365882365],
        ['pt',
        'US pint',
        'pt',
        .473176473],
        ['qt',
        'US quart',
        'qt',
        .946352946],
        ['gal',
        'US gallon',
        'gal',
        3.785411784],
        ['igal',
        'Imperial gallon',
        'Imp gal',
        4.54609]]
    }
    ,
     area:{
        n:'Area',
        g:'▧',
        u:[['cm2',
        'Square centimeter',
        'cm²',
        .0001],
        ['m2',
        'Square meter',
        'm²',
        1],
        ['km2',
        'Square kilometer',
        'km²',
        1e6],
        ['ha',
        'Hectare',
        'ha',
        10000],
        ['acre',
        'Acre',
        'ac',
        4046.8564224],
        ['ft2',
        'Square foot',
        'ft²',
        .09290304],
        ['yd2',
        'Square yard',
        'yd²',
        .83612736]]
    }
    ,
     speed:{
        n:'Speed',
        g:'➤',
        u:[['ms',
        'Meters per second',
        'm/s',
        1],
        ['kmh',
        'Kilometers per hour',
        'km/h',
        .2777777778],
        ['mph',
        'Miles per hour',
        'mph',
        .44704],
        ['knot',
        'Knot',
        'kn',
        .5144444444],
        ['fts',
        'Feet per second',
        'ft/s',
        .3048]]
    }
    ,
     time:{
        n:'Time',
        g:'◷',
        u:[['ms',
        'Millisecond',
        'ms',
        .001],
        ['s',
        'Second',
        's',
        1],
        ['min',
        'Minute',
        'min',
        60],
        ['h',
        'Hour',
        'h',
        3600],
        ['d',
        'Day',
        'd',
        86400],
        ['wk',
        'Week',
        'wk',
        604800],
        ['mo',
        'Average month',
        'mo',
        2629800],
        ['yr',
        'Average year',
        'yr',
        31557600]]
    }
    ,
     data:{
        n:'Digital storage',
        g:'▤',
        u:[['bit',
        'Bit',
        'bit',
        1],
        ['B',
        'Byte',
        'B',
        8],
        ['KB',
        'Kilobyte (decimal)',
        'KB',
        8000],
        ['MB',
        'Megabyte (decimal)',
        'MB',
        8e6],
        ['GB',
        'Gigabyte (decimal)',
        'GB',
        8e9],
        ['TB',
        'Terabyte (decimal)',
        'TB',
        8e12],
        ['KiB',
        'Kibibyte (binary)',
        'KiB',
        8192],
        ['MiB',
        'Mebibyte (binary)',
        'MiB',
        8388608],
        ['GiB',
        'Gibibyte (binary)',
        'GiB',
        8589934592],
        ['TiB',
        'Tebibyte (binary)',
        'TiB',
        8796093022208]]
    }
    ,
     pressure:{
        n:'Pressure',
        g:'◉',
        u:[['Pa',
        'Pascal',
        'Pa',
        1],
        ['kPa',
        'Kilopascal',
        'kPa',
        1000],
        ['bar',
        'Bar',
        'bar',
        1e5],
        ['mbar',
        'Millibar',
        'mbar',
        100],
        ['atm',
        'Atmosphere',
        'atm',
        101325],
        ['psi',
        'Pounds per square inch',
        'psi',
        6894.757293],
        ['torr',
        'Torr',
        'Torr',
        133.322368]]
    }
    ,
     energy:{
        n:'Energy',
        g:'ϟ',
        u:[['J',
        'Joule',
        'J',
        1],
        ['kJ',
        'Kilojoule',
        'kJ',
        1000],
        ['cal',
        'Small calorie',
        'cal',
        4.184],
        ['kcal',
        'Kilocalorie',
        'kcal',
        4184],
        ['Wh',
        'Watt-hour',
        'Wh',
        3600],
        ['kWh',
        'Kilowatt-hour',
        'kWh',
        3600000],
        ['BTU',
        'British thermal unit',
        'BTU',
        1055.05585]]
    }
    ,
     power:{
        n:'Power',
        g:'ϟ',
        u:[['W',
        'Watt',
        'W',
        1],
        ['kW',
        'Kilowatt',
        'kW',
        1000],
        ['MW',
        'Megawatt',
        'MW',
        1e6],
        ['hp',
        'Mechanical horsepower',
        'hp',
        745.699872]]
    }
    ,
     fuel:{
        n:'Fuel economy',
        g:'⛽',
        u:[['l100',
        'Liters per 100 km',
        'L/100 km'],
        ['kml',
        'Kilometers per liter',
        'km/L'],
        ['mpgus',
        'Miles per US gallon',
        'mpg US'],
        ['mpguk',
        'Miles per Imperial gallon',
        'mpg UK']],
        cv:(v, a, b)=>{
            if(v===0)return 0;
            let x=a==='l100'?v:a==='kml'?100/v:a==='mpgus'?235.214583/v:282.480936/v;
            return b==='l100'?x:b==='kml'?100/x:b==='mpgus'?235.214583/x:282.480936/x
        }
    }
}
;
 const $=x=>document.getElementById(x);
let cat='temperature',
saved=JSON.parse(localStorage.getItem('tc-fav')||'[]');
const defaults={
    temperature:['c',
    'f'],
    length:['km',
    'mi'],
    weight:['kg',
    'lb'],
    volume:['l',
    'gal'],
    area:['m2',
    'ft2'],
    speed:['kmh',
    'mph'],
    time:['h',
    'min'],
    data:['MB',
    'GB'],
    pressure:['bar',
    'psi'],
    energy:['kWh',
    'kcal'],
    power:['kW',
    'hp'],
    fuel:['l100',
    'mpgus']
}
;
 function u(id){
    return D[cat].u.find(x=>x[0]===id)
}
function fmt(x){
    return Number.isFinite(x)?new Intl.NumberFormat(undefined, {
        maximumSignificantDigits:10
    }
    ).format(Number(x.toPrecision(10))):'—'
}
function cv(v, a, b){
    let c=D[cat];
    return c.cv?c.cv(v, a, b):v*u(a)[3]/u(b)[3]
}
 function fill(el, selected){
    el.innerHTML='';
    D[cat].u.forEach(x=>{
        let o=document.createElement('option'); o.value=x[0]; o.textContent=x[1]+' ('+x[2]+')'; el.append(o)
    }
    );
    el.value=selected
}
 function update(){
    let v=$('value').value,
    a=$('unitA').value,
    b=$('unitB').value;
     $('symA').textContent=u(a)[2];
    $('symB').textContent=u(b)[2];
    if(v===''){
        $('result').value='';
        $('equation').textContent='Enter a value to see the result';
        return
    }
    let n=Number(v);
    if(!Number.isFinite(n)||((cat==='temperature'&&a==='k'&&n<0)||(cat==='fuel'&&n<0))){
        $('result').value='';
        $('error').textContent='Please enter a valid value.';
        return
    }
    let r=cv(n, a, b);
    if(cat==='temperature'&&b==='k'&&r<0){
        $('result').value='';
        $('error').textContent='This result is below absolute zero.';
        return
    }
    $('error').textContent='';
    $('result').value=fmt(r);
    $('equation').textContent=fmt(n)+' '+u(a)[2]+' = '+fmt(r)+' '+u(b)[2]
}
 function choose(id, a, b){
    cat=id;
    $('title').textContent=D[id].n;
    document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active', x.dataset.cat===id));
    fill($('unitA'), a||defaults[id][0]);
    fill($('unitB'), b||defaults[id][1]);
    $('value').value=id==='temperature'?'25':'1';
    $('favorite').textContent=saved.includes(id)?'★ Saved':'☆ Save';
    update()
}
 Object.entries(D).forEach(([id,
x])=>{
    let b=document.createElement('button'); b.className='cat'; b.dataset.cat=id; b.textContent=x.g+'  '+x.n; b.onclick=()=>choose(id); $('categories').append(b)
}
);
 $('value').oninput=update;
$('unitA').onchange=update;
$('unitB').onchange=update;
$('swap').onclick=()=>{
    let a=$('unitA').value,
    b=$('unitB').value,
    v=$('result').value;
    fill($('unitA'), b);
    fill($('unitB'), a);
    if(v&&v!=='—')$('value').value=v.replace(/, /g, '');
    update()
}
;
 $('reset').onclick=()=>choose(cat);
$('favorite').onclick=()=>{
    saved=saved.includes(cat)?saved.filter(x=>x!==cat):[...saved,
    cat];
    localStorage.setItem('tc-fav', JSON.stringify(saved));
    $('favorite').textContent=saved.includes(cat)?'★ Saved':'☆ Save';
    toast(saved.includes(cat)?'Saved category':'Removed from saved')
}
;
 function toast(s){
    $('toast').textContent=s;
    $('toast').classList.add('show');
    setTimeout(()=>$('toast').classList.remove('show'), 1700)
}
 $('copy').onclick=async()=>{
    try{
        await navigator.clipboard.writeText($('equation').textContent);
        toast('Result copied')
    } catch{
        toast('Clipboard unavailable')
    }
}
;
$('share').onclick=async()=>{
    let url=new URL(location.href);
    url.searchParams.set('category', cat);
    url.searchParams.set('from', $('unitA').value);
    url.searchParams.set('to', $('unitB').value);
    url.searchParams.set('value', $('value').value);
    try{
        if(navigator.share)await navigator.share({
            title:'TempConvert', url:url.href
        }
        );
        else{
            await navigator.clipboard.writeText(url.href);
            toast('Link copied')
        }
    } catch{
    }
}
;
 document.querySelectorAll('.cards button').forEach(b=>b.onclick=()=>{
    choose(b.dataset.cat, b.dataset.a, b.dataset.b); $('converter').scrollIntoView({
        behavior:'smooth'
    }
    )
}
);
 $('theme').onclick=()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('tc-theme', document.body.classList.contains('light')?'light':'dark')
}
;
if(localStorage.getItem('tc-theme')==='light')document.body.classList.add('light');
 let p=new URLSearchParams(location.search),
id=p.get('category');
choose(D[id]?id:'temperature', p.get('from')||undefined, p.get('to')||undefined);
if(p.has('value'))$('value').value=p.get('value');
update();
$('year').textContent=new Date().getFullYear();
