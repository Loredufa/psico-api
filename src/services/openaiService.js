const OpenAI = require('openai');
const { openai_api_key } = require('../utils/config');

// Configurar OpenAI con la API Key
const openai = new OpenAI({
  apiKey: openai_api_key,
});

const parseTextWithOpenAI = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Cambia esto a "gpt-4" si tienes acceso
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `
Interpreta el siguiente texto y determina si se refiere a un gasto o a un ingreso. 
Responde solo con un objeto JSON válido sin ningún texto adicional. 
Si es un gasto, el objeto JSON debe ser: 
{
  "type": "bill", 
  "descripcion": "donde se realizó el gasto, por ejemplo, si el texto dice 'gasto en el kiosco por cinco mil' la descripción debería ser 'kiosco', si dice 'gasto en la tienda de ropa por tres mil' la descripción debería ser 'tienda de ropa', si dice 'gasto en papelería por x monto', la descripción debería ser 'papelería'", 
  "monto": "el monto del gasto, expresado en numeros pero sin el signo de pesos", 
  "mensual": "si el texto se refiere a un gasto mensual colocar true", 
  "diferido": "si el texto menciona la palabra 'diferido' colocar true", 
  "fecha_dif": "solo si en diferido se colocó true y luego de la palabra diferido el texto menciona una fecha, debe colocarse aquí con formato DD-MM-AAAA, si no se especifica el año colocar el año en curso"
}
Si es un ingreso, el objeto JSON debe ser:
{
  "type": "income", 
  "descripcion": "dato que refiere a qué generó el ingreso, por ejemplo, 'ingreso de Javier Acosta' la descripción debería ser 'Javier Acosta', 'ingreso venta de auto' la descripción debería ser 'venta de auto'", 
  "monto": "el monto del ingreso, intenta entender el número expresado en letras y pasarlo a números", 
  "mensual": "completar con un booleano solo si el texto especifica que es un gasto mensual o sea que se realiza todos los meses"
}

Texto: "${text}"
          `
        },
      ],
    });

    const responseText = response.choices[0].message.content;

    // Imprimir la respuesta del modelo para depuración
    console.log("Respuesta del modelo:", responseText);

    // Buscar y extraer la parte del JSON de la respuesta
    const jsonStartIndex = responseText.indexOf('{');
    const jsonEndIndex = responseText.lastIndexOf('}') + 1;
    const jsonString = responseText.substring(jsonStartIndex, jsonEndIndex);

    // Intentar parsear la respuesta del modelo
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      throw new Error("Failed to parse response as JSON");
    }

    return parsedResponse;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw new Error("Failed to get response from OpenAI");
  }
};

module.exports = { parseTextWithOpenAI };





