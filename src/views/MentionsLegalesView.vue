<script setup>
import { CONTACT } from "../data/site";
</script>

<template>
  <section class="bg-gradient-to-r from-brand-950 to-brand-800 text-white">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 py-14 max-w-3xl">
      <span class="inline-flex text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
        Informations légales
      </span>
      <h1 class="text-3xl sm:text-4xl font-extrabold">Mentions légales</h1>
    </div>
  </section>

  <section class="py-14">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 max-w-3xl space-y-8 text-muted">
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Éditeur du site</h2>
        <p>
          T2O Bâtiment — [forme juridique à confirmer], RCS [ville] n° {{ CONTACT.siret }}.<br />
          Siège social : {{ CONTACT.adresse }}. Téléphone : {{ CONTACT.phone }}.
          E-mail : <a :href="CONTACT.mailHref" class="text-brand-600">contactez-nous par e-mail</a>.
        </p>
        <p class="mt-2.5">
          Gérant : {{ CONTACT.gerant }}. Assurance responsabilité civile et garantie décennale :
          [assureur, n° de police].
        </p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Hébergement</h2>
        <p>
          Site hébergé par Cloudflare, Inc. (101 Torre Ave, San Francisco, CA 94020, États-Unis).
        </p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Propriété intellectuelle</h2>
        <p>
          L'ensemble du site (textes, mise en page, logo T2O) est protégé. Toute reproduction sans autorisation écrite
          préalable de T2O Bâtiment est interdite.
        </p>
        <p class="mt-2">
          Le logotype « Espace Aubade » est une marque déposée d'Espace Aubade, utilisée ici uniquement pour signaler
          notre partenariat avec le magasin Espace Aubade de Sélestat, conformément à leur charte graphique.
        </p>
        <p class="mt-2">
          Les photographies de ce site proviennent de la banque d'images Pexels (licence d'utilisation gratuite, sans
          attribution obligatoire), dans l'attente de photographies de nos chantiers. Elles ne sont pas contractuelles.
        </p>
      </div>
      <p class="text-sm">
        Les mentions entre crochets sont des placeholders à compléter avec les informations réelles de l'entreprise.
      </p>
    </div>
  </section>
</template>