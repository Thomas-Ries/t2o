<script setup>
import { CONTACT } from "../data/site";
</script>

<template>
  <section class="bg-gradient-to-r from-brand-950 to-brand-800 text-white">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 py-14 max-w-3xl">
      <span class="inline-flex text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
        Vos données
      </span>
      <h1 class="text-3xl sm:text-4xl font-extrabold">Politique de confidentialité</h1>
    </div>
  </section>

  <section class="py-14">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 max-w-3xl space-y-8 text-muted">
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Qui traite vos données ?</h2>
        <p>T2O Bâtiment, {{ CONTACT.adresse }}, en tant que responsable de traitement.</p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Quelles données et pourquoi ?</h2>
        <p>
          Le formulaire de contact collecte uniquement les informations que vous saisissez : nom, numéro de
          téléphone, localité du projet, corps de métier concerné et description de votre projet. Ces données servent
          exclusivement à répondre à votre demande de prise de contact. La base légale est votre intérêt légitime
          à nous solliciter (mesures précontractuelles).
        </p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Combien de temps ?</h2>
        <p>
          Aucune donnée n'est stockée sur ce site : votre demande est transmise par e-mail à notre adresse de
          contact, puis supprimée une fois la demande traitée ou sans suite de votre part.
        </p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Qui y a accès ?</h2>
        <p>
          Seul T2O Bâtiment. Les données ne sont ni vendues, ni louées, ni transmises à des tiers.
          L'infrastructure technique (hébergement du site et transmission de l'e-mail) est assurée par
          Cloudflare et le prestataire d'envoi d'e-mails.
        </p>
      </div>
      <div>
        <h2 class="text-xl font-extrabold text-brand-950 mb-3">Vos droits</h2>
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données.
          Pour les exercer, <a :href="CONTACT.mailHref" class="text-brand-600">contactez-nous par e-mail</a> ou
          appelez le {{ CONTACT.phone }}. Nous répondons sous 1 mois. Vous pouvez également saisir la CNIL
          (cnil.fr) en cas de litige.
        </p>
      </div>
      <p class="text-sm">Dernière mise à jour : novembre 2026.</p>
    </div>
  </section>
</template>