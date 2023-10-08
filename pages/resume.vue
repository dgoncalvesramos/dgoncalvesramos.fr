	<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Sagemcom
          </h4>
          <span>January 2019 — July 2019</span>
          <p class="timeline-item-desc">
            Budapest, Hungary
          </p>
          <p class="timeline-text">
            Software Engineer : Participation in the development of a smart metering system for value-added terminals (Linky meters)
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Carbon IT
          </h4>
          <span>September 2017 — October 2018</span>
          <p class="timeline-item-desc">
            Paris, France
          </p>
          <p class="timeline-text">
             Software Engineer : Participation in the development and operational maintenance of the information system for centralizing orders of new insurance contracts for French investors abroad on behalf of BPI France
          </p>
         </li>
          
          <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
           Synchronoss Technologies
          </h4>
          <span>September 2017 — June 2018</span>
          <p class="timeline-item-desc">
            Paris, France
          </p>
          <p class="timeline-text">
             Software Engineer : Participation in the development of new features on a cloud service for the mobile telephony clients of Synchronoss Technology.
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
           Sopra Steria
          </h4>
          <span>September 2016 — August 2017</span>
          <p class="timeline-item-desc">
            Paris, France
          </p>
          <p class="timeline-text">
           Software Engineer : Participation in the iterative development of the web portal for centralizing orders of value-added service numbers on behalf of Orange Business Lab
          </p>
        </li>
      </ol>
    </section>
    

    <!--<section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JAVA 
            </h5>
            <data value="90">90%</data>
          </div>
          
           <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
          <div class="title-wrapper">
            <h5 class="h5">
              C 
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

      </ul>
    </section>>-->
  </article>
</template>
