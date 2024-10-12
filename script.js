document.addEventListener("DOMContentLoaded", function() {
    const trofeos = [
        { nombre: "Trofeo de Oro", descripcion: "Premio al mejor rendimiento", emoji: "🥇" },
        { nombre: "Trofeo de Plata", descripcion: "Premio al segundo lugar", emoji: "🥈" },
        { nombre: "Trofeo de Bronce", descripcion: "Premio al tercer lugar", emoji: "🥉" },
        { nombre: "Trofeo de Participación", descripcion: "Premio a la participación", emoji: "🏆" },
        { nombre: "Trofeo de Esfuerzo", descripcion: "Premio al esfuerzo", emoji: "🏆" },
        { nombre: "Trofeo de Innovación", descripcion: "Premio a la innovación", emoji: "🏆" },
        { nombre: "Trofeo de Creatividad", descripcion: "Premio a la creatividad", emoji: "🏆" },
        { nombre: "Trofeo de Liderazgo", descripcion: "Premio al liderazgo", emoji: "🏆" },
        { nombre: "Trofeo de Colaboración", descripcion: "Premio a la colaboración", emoji: "🏆" },
        { nombre: "Trofeo de Logro", descripcion: "Premio al logro", emoji: "🏆" }
    ];

    const container = document.getElementById("trofeos");

    trofeos.forEach(trofeo => {
        const item = document.createElement("div");
        item.className = "trofeo";
        item.innerHTML = `
            <span class="emoji">${trofeo.emoji}</span>
            <div>
                <div class="nombre">${trofeo.nombre}</div>
                <div class="descripcion">${trofeo.descripcion}</div>
            </div>
        `;
        container.appendChild(item);
    });
});
