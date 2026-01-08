async function fetchUrls(){
    const res=await fetch('/api/urls');
    const data=await res.json();
    const tbody=document.querySelector('#urls-tabletbody');
    tbody.innerHTML='';
    data.forEach(r=>{
        const tr=document.createElement('tr');
        tr.innerHTML='<td>${r.id}</td><td><a> href="${r.original_url}</a></td><td><a href="/${r.short_code}" target="_blank">${r.short_code}</a></td><td>${new {r.short_code}'
    })
}