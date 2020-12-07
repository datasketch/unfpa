---
title: Metodología
weight: 5
---

Habiendo investigado la metodología de recolección de información sobre mitos en torno a la anticoncepción, es posible resumir los retos de los datos y realizar una metodología para la recolección de la misma.

En el proceso de la captura de datos hay dos retos principales que necesitamos definir. Uno es la **identificación de los mitos** y el otro es la **identificación de los tweets** que hablan de estos mitos.

## Identificar los mitos

Identificar los mitos a partir de los datos que ya tenemos es un reto, ya que implica realizar mucho trabajo manual. Para identificar los temas y categorías asociados a los mitos de anticoncepción, sugerimos el siguiente método.

La idea de este método es que se identifiquen los posibles mitos sobre los que la gente puede estar hablando en los medios sociales utilizando la página de [fact-checking de Google](https://toolbox.google.com/factcheck/explorer?authuser=0). En esta página web se puede buscar manualmente una palabra clave y el resultado es una lista de artículos relacionados con esa palabra clave. Además, la página viene con una API con la que se pueden **automatizar la búsqueda de los artículos** relacionados con las palabras clave de interés.

## Identificar los tweets

Idealmente, se podrían identificar/raspar los tweets que contienen un link al artículo relacionado con el mito, pero hay dos retos con eso:

1. muchos de los artículos sobre los mitos que uno encuentra a través de la página de fact-checking [muestran una captura de pantalla](https://factual.afp.com/no-esta-imagen-no-muestra-un-feto-de-siete-meses-en-una-clinica-de-abortos) de un post de Facebook (o de otra fuente) y usan esta captura de pantalla para desacreditar el mito. Sin embargo, normalmente no contienen un enlace al artículo original.
1. incluso si encontramos el artículo original sobre el mito, cuando se comparten enlaces en Twitter generalmente acortan el link (por ejemplo con bit.ly), lo que hace difícil encontrar los tweets de origen.

Una alternativa que vemos es usar el contenido/tema del mito para crear **manualmente una lista de palabras clave relacionadas con el mito** con las que luego podemos raspar en Twitter.

## Puntuación de sentimientos

Para las visualizaciones y tablas que muestran información sobre el "sentimiento" de los tweets utilizamos un método que utiliza un diccionario de sentimientos positivos o negativos llamado [iSOL](https://sinai.ujaen.es/investigacion/recursos/isol). Este diccionario es una traducción de uno de los diccionarios de sentimiento más utilizados en inglés por [Bing Liu](https://www.cs.uic.edu/~liub/).

Sin embargo, cuando se interpretan los resultados de un análisis de sentimientos se deben tener en cuenta las limitaciones que contienen las puntuaciones de sentimientos. Porque a menudo este método no detecta el verdadero sentimiento de un tweet individual por la forma en que la gente usa el lenguaje. Ejemplos de esto incluyen los dobles negativos y la ironía que son cosas que este tipo de análisis de sentimientos no puede identificar.

Con estos asuntos en cuenta, se pudieron desarrollar las herramientas de exploración de información de los temas, las categorías y los tweets completos relacionados con mitos de anticoncepción.