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
            Backend JAVA/JEE design and development engineer
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
            Backend JAVA/JEE design and development engineer
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
            Backend JAVA/JEE design and development engineer
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
            Backend JAVA/JEE design and development engineer
          </p>
        </li>
      </ol>
    </section>
    

    <!-- <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JAVA/JEE 
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
    </section> -->
  </article>
</template>
