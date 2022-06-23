function getBotResponse(input) {


        // horarios //
        if (input == "que horarios manejan" || 
        input == "horarios" || 
        input == "horario" ||
        input == "Horario" ||
        input == "Horarios" ||
        input == "HORARIOS" ||
        input == "HORARIO" || 
        input == "que horarios maneja" ||
        input == "que dias abre" ||
        input == "que horarios maneja" ||
        input == "cuando puedo ir" ||
        input == "que horarios maneja" ||
        input == "cuando abren" ||
        input == "cuando abren dif" ||
        input == "que horarios tiene" ||
        input == "a que horas esta abierto" ||
        input == "cuando abren el dif" ||
        input == "a que horas abren el dif" ||
        input == "a que horas abren dif" ||
        input == "a que horas abre el dif") {
        return "DIF Municipal Coquimatlán labora de Lunes a Viernes en un horario normal de 9:00 de la mañana a 3:00 de la tarde.";   

        // servicios //
    } else if (input == "servicios" ||
        input == "Servicios" ||
        input == "SERVICIOS" ||
        input == "Servicio" ||
        input == "servicio" ||
        input == "SERVICIO") {
        return "Los servicios que contamos abarcan desde Gestión Social, Jurídico, Pensiones, Programa Alimentario, Pisocolgía hasta INAPAM. <br><br>Para más información, visite <a href=servicios.html>servicios.</a>";
    
       // agradecimientos //
    } else if (input == "Gracias por su buen servicio." ||
        input == "gracias" ||
        input == "Gracias" ||
        input == "muchas gracias" ||
        input == "okey gracias" ||
        input == "okay gracias" ||
        input == "okey, gracias" ||
        input == "okay, gracias" ||
        input == "GRACIAS" ||
        input == "ok gracias" ||
        input == "ok, gracias") {
        return "Con gusto, para servirle a usted &#128512;";

       // saludos //
    } else if (input == "hola" ||
        input == "HOLA" ||
        input == "Hola" ||
        input == "buenas" ||
        input == "buenos dias" ||
        input == "buenas tardes" ||
        input == "buenas noches" ||
        input == "que tal" ||
        input == "bot" ||
        input == "hola buenos dias" ||
        input == "hola, buenos dias" ||
        input == "hola, buenas tardes" ||
        input == "hola buenas tardes" ||
        input == "hola buenas noches" ||
        input == "hola, buenas noches" ||
        input == "hola buenas" ||
        input == "saludos") {
        return "Hola &#128400   , le doy la bienvenida y agradezco su visita. <br><br> ¿En qué puedo ser útil?";

    // domicilio //
    } else if (input == "domicilio" ||
        input == "Domicilio" ||
        input == "DOMICILIO" ||
        input == "que domicilio tiene" ||
        input == "donde queda" ||
        input == "donde queda dif" ||
        input == "donde se ubican" ||
        input == "como puedo llegar" ||
        input == "donde esta el dif" ||
        input == "por donde queda dif") {
        return "El DIF de Coquimatlán se encuentra en: <br><br> Hidalgo S/N, Centro. C.P. 28400, Coquimatlán, Colima, México. Quedámos a sus órdenes &#128578       ";

        // ayuda //
    } else if (input == "ayuda" ||
        input == "AYUDA" ||
        input == "Ayuda" ||
        input == "palabras clave") {
        return "<b>[Revisando]...</b> Intente probar con alguna de las siguiente palabras clave: <br><br> <b>horario</b> <br> <b>servicios</b> <br> <b>domicilio</b>"

    } else {
        return "Sin resultados... &#129300   Para ver los comandos, escriba la palabra <b>ayuda</b>."
    }


}
