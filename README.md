# Ferramenta de Classificação de Relatos de Crimes Ambientais

A ferramenta de classificação de relatos de crimes ambientais processa denuncias na forma de texto livre em linguagem natural. Para realizar a análise dos dados não-estruturados, a ferramenta utiliza técnicas de aprendizagem profunda (deep learning) para interpretar e inferir com confiança uma classificação sobre sentenças ou frases curtas. 

As denuncias são classificandas em três dimensões: Severidade, Urgência e Relevância.

Severidade
Urgência
Relevância
Valor
 

A ferramenta está dividida em três módulos: Treinamento, Serviço e Cliente. O módulo de treinamento é responsável ...

Após o treinamento, o serviço retorna informações para textos que não tenha visto antes.


Para realizar este trabalho, a ferrmenta utiliza a API Natural Language Classifier do IBM Watson™. Este serviço compreende a intenção por trás do texto e retorna uma classificação correspondente, completa com uma pontuação de confiança. Por exemplo "Como está o tempo hoje? Ou "Está quente para fora?" Ou "Está indo ser agradável hoje?" São todas as maneiras de perguntar sobre a "temperatura". 

Natural Language Classifier aplica técnicas de aprendizagem profunda (deep learning) para fazer previsões sobre as melhores classes predefinidas para pequenos textos. A aprendizagem profunda (deep learning) é um ramo de aprendizado de máquina (Machine Learning) baseado em um conjunto de algoritmos que tentam modelar abstrações de alto nível de dados usando um grafo profundo com várias camadas de processamento, compostas de várias transformações lineares e não lineares. A aprendizagem profunda é parte de uma família mais abrangente de métodos de aprendizado de máquina baseados na aprendizagem de representações de dados.

