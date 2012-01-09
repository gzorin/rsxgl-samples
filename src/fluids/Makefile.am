include $(srcdir)/../samples.am

eigen_LOCATION = $(top_srcdir)/extsrc/eigen
eigen_CPPFLAGS = -I$(eigen_LOCATION)

noinst_PROGRAMS = fluids.elf

shaders = fluids.vert fluids.frag pointer.vert pointer.frag
images = pointer.png
sources = fluids.cc solver.c $(shaders) $(images)
objects = $(call shader_objs,$(shaders)) $(call image_objs,$(images))

BUILT_SOURCES = $(call shader_headers,$(shaders)) $(call image_headers,$(images)) \
	$(objs_H)
CLEANFILES = $(call shader_headers,$(shaders)) $(call shader_objs,$(shaders)) \
	$(call image_headers,$(images)) $(call image_objs,$(images)) \
	$(objs_H) $(objs_OBJS)

fluids_elf_DEPENDENCIES = $(objects)
fluids_elf_SOURCES = ../common/main.c		\
	../common/math3d.cc ../common/texture.c	\
	$(sources)

fluids_elf_CPPFLAGS = -D__RSX__ $(eigen_CPPFLAGS) $(PSL1GHT_CPPFLAGS) -I$(top_srcdir)/src/common -I$(top_builddir)/src/common @ppu_libpng_CPPFLAGS@ @ppu_zlib_CPPFLAGS@
fluids_elf_CFLAGS = -std=gnu99 -fgnu89-inline -O3
fluids_elf_LDFLAGS = $(PSL1GHT_LDFLAGS) @ppu_libpng_LDFLAGS@ @ppu_zlib_LDFLAGS@
fluids_elf_LDADD = $(objects) -lEGL -lGL -lrsx -lgcm_sys -lnet -lio -lsysutil -lsysmodule -lrt -llv2 @ppu_libpng_LIBS@ @ppu_zlib_LIBS@

TITLE           :=      FLUIDS
APPID           :=      RSXGLSMP3
CONTENTID       :=      UP0001-$(APPID)_00-0000000000000000
PKGFILES        :=      release
override ICON0		:=	$(srcdir)/../common/brewcrab.png

pkg: fluids.pkg

all-local: pkg

clean-local:
	@rm -rf pkg fluids.self fluids.pkg 
