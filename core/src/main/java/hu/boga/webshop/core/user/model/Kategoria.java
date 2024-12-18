/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.user.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import lombok.Data;


/**
 * @author user
 */
@Data
public class Kategoria {

  private List<Kategoria> children = new ArrayList<>();

  private String megnevezes;

  private Kategoria parent;

  private Collection<Tetel> tetelek;
}
