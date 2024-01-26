# Simulazione

**IMPORTANTE: create un fork del progetto e non un clone.**

## Prima parte

Creare una nuova branch 'part-1' e lavorare su quella.
Completate le attività fare un merge sulla branch principale.

- [ ] Aggiungere e configurare React Router
- [ ] Configurare il router per gestire una pagina di errore
- [ ] Installare e configurare Chakra UI
- [ ] Insstallare e configurare Axios
- [ ] Recuperare l'api e la chiave per accedre ai dati da <https://www.omdbapi.com> (potete usare la chiave vecchia cercando nelle vostre email 'omdb') oppure attivarne una nuova (<https://www.omdbapi.com/apikey.aspx>).
- [ ] Invitatemi nel vostro repo creato con il fork.
  
*IMPORTANTE*: Eliminare dal progetto tutti i file che non vi sono necessari che fanno parte del template Vite di base.

## Seconda parte

Creare una nuova branch 'part-2' e lavorare su quella.
Completate le attività fare un merge sulla branch principale.

- [ ] Creare due funzioni per la chiamata alle API:
  -> [ ] getMovies: nessun parametro, restituisce l'elenco dei movie
  -> [ ] getDetailMovie: parametro id, restituisce i dettagli di un movie

## Terza parte

Creare una nuova branch 'part-3' e lavorare su quella.
Completate le attività fare un merge sulla branch principale.

- [ ] Prevedere per l'applicatione un Header comune con logo e relativo link per tornare in home page
- [ ] Creare una pagina di elenco dei movie:
  -> [ ] Creare un loader per acquisire l'elenco dei movie con axios.
  -> [ ] Componente contenitore dell'elenco dei movie (es. grid) MovieList
  -> [ ] Componente per la visualizzazione di un singolo movie (es. card) MovieCard

## Quarta parte

Creare una nuova branch 'part-4' e lavorare su quella.
Completate le attività fare un merge sulla branch principale.

- [ ] Creare una pagina/rotta per la visualizzazione dei dettagli di un movie
  -> [ ] Creare un loader per acquisire i dettagli di un movie con axios.
  -> [ ] Creare un componente per la visualizzazione dei dettagli di un movie MovieDetail
  -> [ ] Modificare la pagina di elenco dei movie in modo che al click su un movie si vada alla pagina di dettaglio (passare come parametro l'id del movie nella URL)
