import json
import re
import sys
from pathlib import Path
from datetime import datetime

def extraer_opciones_json(archivo_entrada):
    """
    Extrae todas las opciones de respuesta de un archivo JSON de formularios
    """
    try:
        # Leer el archivo
        with open(archivo_entrada, 'r', encoding='utf-8') as file:
            contenido = file.read()
        
        print(f"📁 Archivo leído: {len(contenido):,} caracteres")
        
        # Buscar todos los bloques questionInfo que contienen las opciones
        patron_question_info = r'"questionInfo"\s*:\s*"({[^"]*(?:\\"[^"]*)*})"'
        matches = re.findall(patron_question_info, contenido)
        
        print(f"🔍 Bloques questionInfo encontrados: {len(matches)}")
        
        # Buscar títulos para emparejar con las opciones
        patron_titulos = r'"(?:title|formsProRTQuestionTitle)"\s*:\s*"([^"]+)"'
        titulos_raw = re.findall(patron_titulos, contenido)
        
        # Filtrar y limpiar títulos
        titulos = []
        for titulo in titulos_raw:
            if titulo and len(titulo.strip()) > 5 and "Código y autorización" not in titulo:
                titulos.append(titulo.strip())
        
        # Eliminar duplicados manteniendo orden
        titulos_unicos = []
        for titulo in titulos:
            if titulo not in titulos_unicos:
                titulos_unicos.append(titulo)
        
        print(f"📝 Títulos únicos encontrados: {len(titulos_unicos)}")
        
        # Procesar cada bloque questionInfo
        cuestionarios_data = []
        
        for i, match in enumerate(matches):
            try:
                # Limpiar el JSON escapado
                json_limpio = match.replace('\\"', '"').replace('\\\\', '\\')
                info_data = json.loads(json_limpio)
                
                # Extraer opciones si existen
                if 'Choices' in info_data and isinstance(info_data['Choices'], list):
                    opciones = []
                    
                    for choice in info_data['Choices']:
                        if isinstance(choice, dict) and 'Description' in choice:
                            descripcion = choice['Description'].strip()
                            if descripcion:
                                opciones.append({"texto": descripcion})
                    
                    if opciones:
                        cuestionarios_data.append({
                            "bloque_original": i + 1,
                            "opciones": opciones,
                            "total_opciones": len(opciones)
                        })
                        print(f"   📋 Bloque {i + 1}: {len(opciones)} opciones extraídas")
                        
            except json.JSONDecodeError as e:
                print(f"   ⚠️ Error procesando bloque {i + 1}: {e}")
                continue
        
        # Crear estructura final
        resultado = {
            "cuestionarios": [],
            "metadata": {
                "total_cuestionarios": 0,
                "total_opciones": 0,
                "fecha_extraccion": datetime.now().isoformat(),
                "metodo": "extraccion_python_regex",
                "archivo_origen": Path(archivo_entrada).name
            }
        }
        
        # Asignar títulos a cuestionarios
        for i, cuest_data in enumerate(cuestionarios_data):
            # Intentar asignar título correspondiente
            if i < len(titulos_unicos):
                titulo = titulos_unicos[i]
            else:
                titulo = f"Cuestionario {i + 1}"
            
            # Crear descripción basada en el contenido
            descripcion = ""
            if len(cuest_data["opciones"]) > 0:
                primer_opcion = cuest_data["opciones"][0]["texto"].upper()
                if any(keyword in primer_opcion for keyword in ["DOLOR", "FIEBRE", "SANGRE", "SINTOMA"]):
                    descripcion = "Códigos de síntomas y signos médicos"
                elif any(keyword in primer_opcion for keyword in ["GASTRO", "HEPAT", "INTESTIN", "DIGEST"]):
                    descripcion = "Códigos de enfermedades digestivas"
                elif any(keyword in primer_opcion for keyword in ["EMBARAZO", "PARTO", "PUERPERIO"]):
                    descripcion = "Códigos relacionados con embarazo y parto"
                elif any(keyword in primer_opcion for keyword in ["APOYO", "BIENESTAR", "DESEO"]):
                    descripcion = "Opciones de apoyo estudiantil"
                else:
                    descripcion = "Opciones de formulario médico"
            
            cuestionario = {
                "id": i + 1,
                "titulo": titulo,
                "descripcion": descripcion,
                "total_opciones": cuest_data["total_opciones"],
                "opciones": cuest_data["opciones"]
            }
            
            resultado["cuestionarios"].append(cuestionario)
            resultado["metadata"]["total_opciones"] += cuest_data["total_opciones"]
        
        resultado["metadata"]["total_cuestionarios"] = len(resultado["cuestionarios"])
        
        return resultado
        
    except FileNotFoundError:
        print(f"❌ No se encontró el archivo: {archivo_entrada}")
        return None
    except Exception as e:
        print(f"❌ Error inesperado: {e}")
        return None

def guardar_resultado(resultado, archivo_salida):
    """
    Guarda el resultado en un archivo JSON limpio
    """
    try:
        with open(archivo_salida, 'w', encoding='utf-8') as file:
            json.dump(resultado, file, indent=2, ensure_ascii=False)
        print(f"✅ Resultado guardado en: {archivo_salida}")
        return True
    except Exception as e:
        print(f"❌ Error al guardar: {e}")
        return False

def mostrar_resumen(resultado):
    """
    Muestra un resumen del resultado
    """
    if not resultado:
        return
    
    print("\n" + "="*60)
    print("📊 RESUMEN DE EXTRACCIÓN")
    print("="*60)
    print(f"📋 Total cuestionarios: {resultado['metadata']['total_cuestionarios']}")
    print(f"📝 Total opciones: {resultado['metadata']['total_opciones']:,}")
    print(f"📅 Fecha extracción: {resultado['metadata']['fecha_extraccion']}")
    
    for i, cuestionario in enumerate(resultado['cuestionarios']):
        print(f"\n{i + 1}. {cuestionario['titulo']}")
        print(f"   📝 {cuestionario['descripcion']}")
        print(f"   📊 Opciones: {cuestionario['total_opciones']:,}")
        
        # Mostrar ejemplos
        if cuestionario['opciones']:
            print(f"   📋 Ejemplos:")
            for j, opcion in enumerate(cuestionario['opciones'][:5]):
                print(f"      • {opcion['texto']}")
            if len(cuestionario['opciones']) > 5:
                print(f"      ... y {len(cuestionario['opciones']) - 5:,} más")

def main():
    """
    Función principal
    """
    print("🧹 Extractor de Opciones JSON - Versión Final")
    print("="*60)
    
    # Obtener archivo de entrada
    if len(sys.argv) > 1:
        archivo_entrada = sys.argv[1]
    else:
        archivo_entrada = input("📁 Ingresa la ruta del archivo JSON: ").strip()
        # Remover comillas si las hay
        archivo_entrada = archivo_entrada.strip('"\'')
    
    if not Path(archivo_entrada).exists():
        print(f"❌ El archivo '{archivo_entrada}' no existe")
        return
    
    print(f"🔍 Procesando: {archivo_entrada}")
    
    # Extraer opciones
    resultado = extraer_opciones_json(archivo_entrada)
    
    if not resultado:
        print("❌ No se pudo procesar el archivo")
        return
    
    # Mostrar resumen
    mostrar_resumen(resultado)
    
    # Guardar resultado
    nombre_base = Path(archivo_entrada).stem
    archivo_salida = f"{nombre_base}_opciones_extraidas.json"
    
    if guardar_resultado(resultado, archivo_salida):
        # Calcular reducción de tamaño
        try:
            tamaño_original = Path(archivo_entrada).stat().st_size
            tamaño_limpio = Path(archivo_salida).stat().st_size
            reduccion = ((tamaño_original - tamaño_limpio) / tamaño_original) * 100
            
            print(f"\n💾 Archivo generado: {archivo_salida}")
            print(f"📉 Reducción de tamaño: {reduccion:.1f}%")
            print(f"   Original: {tamaño_original:,} bytes")
            print(f"   Limpio: {tamaño_limpio:,} bytes")
        except:
            print(f"\n💾 Archivo generado: {archivo_salida}")
        
        print(f"\n🎉 ¡Extracción completada exitosamente!")
    else:
        print("❌ Error al guardar el archivo")

if __name__ == "__main__":
    main()